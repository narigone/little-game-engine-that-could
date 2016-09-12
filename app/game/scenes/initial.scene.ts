import { Scene } from '../../engine/models/scene';
import { Action } from '../../engine/models/action';

import { CharacterService } from '../../engine/services/character.service';

class FirstAction extends Action{
  constructor() {
    super();

    this.description = 'First action!';
    this.nextSceneId = 'second-scene';
  }

  processConsequences(characterService: CharacterService){
    var jane = characterService.getCharacterById( 'jane' );
    jane.properties.charisma += 10;
  }
}

export class InitialScene extends Scene{
  constructor() {
    super();
    this.id = 'initial-scene';

    this.images.push( 'assets/initial-scene-small.jpeg' );

    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue, ex id fermentum ultricies, dolor nunc viverra lorem, quis maximus quam diam vitae lectus. Sed interdum felis sed nisi dignissim, at viverra nibh eleifend. Nam interdum augue ac metus molestie accumsan. Etiam egestas pretium neque id porttitor. Maecenas nec elementum turpis. Duis eget orci eget tellus interdum facilisis egestas sed diam. Vestibulum ac scelerisque sem. Sed quis lobortis felis. Pellentesque mollis nibh libero, ut suscipit orci vehicula commodo. Vivamus dignissim quam eu maximus maximus. Proin mattis metus quis elit sollicitudin faucibus. Suspendisse hendrerit scelerisque dui ut sagittis."
    this.isFirstScene = true;

    this.actions.push(new FirstAction());
  }
};
