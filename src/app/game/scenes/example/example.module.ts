import { Module } from '../../../engine/models/module';

import { CharacterService } from '../../../engine/services/character.service';
import { SceneService } from '../../../engine/services/scene.service';

export class ExampleModule extends Module{
  setupScenes(sceneService: SceneService){
    // TODO: Add any scene you make on this module here
    // Separate in modules for better control and debugging

    // Example: sceneService.addScene(new Scene());
  }
}
