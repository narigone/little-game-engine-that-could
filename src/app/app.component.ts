import { Component, OnInit, isDevMode } from '@angular/core';
import {URLSearchParams} from "@angular/http";

import { Scene } from './engine/models/scene';
import { Image } from './engine/models/image';

import { GameModel } from './game/game.model';

import { SceneService } from './engine/services/scene.service';
import { CharacterService } from './engine/services/character.service';

import { ViewSceneComponent } from './engine/components/view-scene.component';

@Component({
  selector: 'game',
  templateUrl: './app.component.html',
  providers: [GameModel, SceneService, CharacterService]
})

export class AppComponent implements OnInit {
  private firstScene: Scene;

  private startGame: Boolean = false;
  private showDisclaimer: Boolean = false;
  private showSplash: Boolean = true;

  private splashScreen: Image;
  private disclaimerScreen: Image;

  constructor(private gameModel: GameModel) {
      this.splashScreen = new Image(0, "assets/SplashScreen.jpg");
      this.disclaimerScreen = new Image(0, "assets/disclaimer.jpg");
  }

  onSplashClicked() : void {
    this.showSplash = false;
    this.showDisclaimer = true;
  }

  onDisclaimerClicked() : void {
    this.showDisclaimer = false;
    this.startGame = true;
  }

  ngOnInit(): void {
    if(isDevMode()) {
      let params = new URLSearchParams(window.location.search);

      let sceneId = params.get('?sceneId');
      let scene = this.gameModel.getSceneById( sceneId );
      if( scene == null ){
        this.firstScene = this.gameModel.getFirstScene();
      } else {
        this.firstScene = scene;
      }
    } else {
      this.firstScene = this.gameModel.getFirstScene();
    }
  }
}
