import { Character } from '../../engine/models/character';

export class Jane extends Character{
  constructor() {
    super();
    this.id = 'jane';
    this.properties = {
      charisma: 20,
      strength: 5,
      dexterity: 20
    }
  }
};
