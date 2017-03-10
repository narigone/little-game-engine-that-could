import {
  Component,
  Input,
  SimpleChange,
  AfterViewInit,
  ViewChild
} from '@angular/core';

import { SceneService } from '../services/scene.service';
import { CharacterService } from '../services/character.service';

import { Scene } from '../models/scene';
import { Action } from '../models/action';

import { ActionIterator } from '../iterator/action.iterator';

@Component({
  selector: 'scene',
  templateUrl: '../templates/view-scene.component.html',
  styleUrls: ['../styles/view-scene.component.css']
})

export class ViewSceneComponent implements AfterViewInit {
  private _scene: Scene;

  sceneId: String;

  sceneList: Scene[];
  actionIterator: ActionIterator;

  currentImageIndex: number = 0;
  showText: boolean = true;

  cycleInterval = null;

  @ViewChild('textContainer') textContainer;

  constructor(private sceneService: SceneService, private characterService: CharacterService) {
    this.sceneList = this.sceneService.getAllScenes();
  }

  ngAfterViewInit() {
    this.startCycleImageIntervalIfSceneHasMoreThanOneImage();
  }

  startCycleImageIntervalIfSceneHasMoreThanOneImage() {
    if(this._scene == null){
      return;
    }
    if( this._scene.images.length > 1 ){
      let interval = setInterval(() => {
        this.cycleImages();
      }, 350);
      this.cycleInterval = interval;
    } else if( this.cycleInterval != null ){
      clearInterval(this.cycleInterval);
    }
  }

  @Input()
  set scene( scene: Scene ) {
    this._scene = scene;
    this.currentImageIndex = 0;
    this.actionIterator = null;
    this.startCycleImageIntervalIfSceneHasMoreThanOneImage();
  }

  get scene(): Scene {
    return this._scene;
  }

  cycleImages(): void {
    if( this._scene == null || this._scene.images == null || this._scene.images.length <= 1 ){
      clearInterval(this.cycleInterval);
      return;
    }

    let imageIndex = this.currentImageIndex;
    imageIndex++;
    if( this.scene.images.length == imageIndex ){
      this.currentImageIndex = 0;
    } else {
      this.currentImageIndex = imageIndex;
    }
    return;
  }

  getActionIterator(): ActionIterator {
    if( this.actionIterator == null ){
      this.actionIterator = new ActionIterator(this.scene);
    }

    return this.actionIterator;
  }

  onActionSelected(action:Action) : void{
    if(!action.meetsRequirements(this.characterService)){
      return;
    }

    action.processConsequences(this.characterService);

    this.sceneId = action.nextSceneId;

    let scene = this.sceneService.getSceneById(action.nextSceneId);
    this.scene = scene ;
 
    this.textContainer.nativeElement.scrollTop = 0;
  }

  isValidScene(sceneId : number) : boolean{
      let scene = this.sceneService.getSceneById(sceneId);
      return scene != null;
  }

  toggleShowText() : void {
    this.showText = !this.showText;
  }
}
