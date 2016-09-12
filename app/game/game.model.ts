import { Injectable } from '@angular/core';
import { SceneService } from '../engine/services/scene.service';
import { CharacterService } from '../engine/services/character.service';

import { Scene} from '../engine/models/scene';

import { John } from './characters/John';
import { Jane } from './characters/Jane';

import { InitialScene } from './scenes/initial.scene';
import { SecondScene } from './scenes/second.scene';

@Injectable()
export class GameModel {
  constructor(private characterService: CharacterService, private sceneService: SceneService) {
    characterService.addCharacter(new John());
    characterService.addCharacter(new Jane());

    sceneService.addScene(new InitialScene());
    sceneService.addScene(new SecondScene());
  }

  getFirstScene(): Scene {
    return this.sceneService.getFirstScene();
  }
}
