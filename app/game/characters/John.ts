import { Character } from '../../engine/models/character';

export class John extends Character{
  constructor() {
    super();
    this.id = 'john';
    this.properties = {
      charisma: 10,
      strength: 10,
      dexterity: 10
    }
  }
};
