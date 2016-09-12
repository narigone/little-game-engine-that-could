import { Component, OnInit } from '@angular/core';

import { Scene } from './engine/models/scene';

import { GameModel } from './game/game.model';

import { SceneService } from './engine/services/scene.service';
import { CharacterService } from './engine/services/character.service';

import { ViewSceneComponent } from './engine/components/view-scene.component';

@Component({
  selector: 'game',
  template: '<scene [scene]="firstScene"></scene>',
  providers: [GameModel, SceneService, CharacterService]
})

export class AppComponent implements OnInit {
  private firstScene: Scene;
  constructor(private gameModel: GameModel) {

  }

  ngOnInit(): void {
    this.firstScene = this.gameModel.getFirstScene();
  }
}
