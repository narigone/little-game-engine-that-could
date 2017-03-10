import { Injectable } from '@angular/core';
import { BaseGameModel } from '../engine/base.game.model';

import { SceneService } from '../engine/services/scene.service';
import { CharacterService } from '../engine/services/character.service';

import { CharacterModule } from './characters/character.module';

import { ExampleModule } from './scenes/example/example.module';
@Injectable()
export class GameModel extends BaseGameModel{
  constructor(characterService: CharacterService,sceneService: SceneService) {
    super(characterService, sceneService);
  }

  initModules() : void {
    this.addModule(new ExampleModule());

    // TODO: Add any given module
  }
}
