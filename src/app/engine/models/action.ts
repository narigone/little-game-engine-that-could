
import { CharacterService } from '../services/character.service';

export class Action{
  public description:string = null;
  public nextSceneId:string = null;
  public area:string = null;

  meetsRequirements(characterService: CharacterService){
    return true;
  }

  processConsequences(characterService: CharacterService){

  }
}
