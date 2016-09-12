import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable()
export class CharacterService {
  private characters: Character[] = [];

  constructor() {
  }

  getCharacterById(id): Character{
    for( var i = 0; i < this.characters.length; i ++ ){
      if( this.characters[i].id == id ){
        return this.characters[i];
      }
    }
    return null;
  }

  addCharacter(character:Character) : void {
    this.characters.push(character);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
