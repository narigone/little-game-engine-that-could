import { Scene } from '../../engine/models/scene';
import { Action } from '../../engine/models/action';

import { CharacterService } from '../../engine/services/character.service';

class FirstAction extends Action{
  constructor() {
    super();

    this.description = 'Disabled Action';
    this.nextSceneId = 'third-scene';
  }

  meetsRequirements(characterService: CharacterService){
    var jane = characterService.getCharacterById( 'jane' );
    if( jane.properties.charisma >= 600 ){
      return true;
    } else {
      this.description = 'Disabled Action (needs more charisma)';
      return false;
    }
  }
}

class SecondAction extends Action{
  constructor() {
    super();

    this.description = 'Really long Button name just for testing';
    this.nextSceneId = 'third-scene';
  }
}

export class SecondScene extends Scene{
  constructor() {
    super();
    this.id = 'second-scene';

    this.images.push( 'assets/second-scene-small.jpg' );

    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, ex id fermentum ultricies, dolor nunc viverra lorem, quis maximus quam diam vitae lectus. Sed interdum felis sed nisi dignissim, at viverra nibh eleifend. Nam interdum augue ac metus molestie accumsan. Etiam egestas pretium neque id porttitor. Maecenas nec elementum turpis. Duis eget orci eget tellus interdum facilisis egestas sed diam. Vestibulum ac scelerisque sem. Sed quis lobortis felis. Pellentesque mollis nibh libero, ut suscipit orci vehicula commodo. Vivamus dignissim quam eu maximus maximus. Proin mattis metus quis elit sollicitudin faucibus. Suspendisse hendrerit scelerisque dui ut sagittis."

    this.actions.push(new FirstAction());
    this.actions.push(new SecondAction());
  }
};
