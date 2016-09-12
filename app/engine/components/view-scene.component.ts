import { Component, Input } from '@angular/core';

import { SceneService } from '../services/scene.service';
import { CharacterService } from '../services/character.service';

import { Scene } from '../models/scene';
import { Action } from '../models/action';

@Component({
  selector: 'scene',
  templateUrl: '/app/engine/templates/view-scene.component.html',
  styleUrls: ['app/engine/styles/view-scene.component.css']
})

export class ViewSceneComponent {
  @Input()
  scene: Scene;

  constructor(private sceneService: SceneService, private characterService: CharacterService) {

  }

  onActionSelected(action:Action) : void{
    if(!action.meetsRequirements(this.characterService)){
      return;
    }

    action.processConsequences(this.characterService);

    let scene = this.sceneService.getSceneById(action.nextSceneId);
    this.scene = scene;
  }
}
