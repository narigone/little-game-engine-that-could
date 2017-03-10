import { Module } from '../../engine/models/module';

import { CharacterService } from '../../engine/services/character.service';
import { SceneService } from '../../engine/services/scene.service';

export class CharacterModule extends Module{
  setupCharacters(characterService: CharacterService){
    // TODO: Add characters here
    // Example: characterService.addCharacter(new MyCharacter());
  }
}
