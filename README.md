# LGETC - Little Game Engine That Could

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Synopsis

Minimalistic game engine for static image adventure games. The project aims to give game developers a tool for telling non-linear stories.

Stories are modelled in **Scenes**. Each **Scene** has a textual description, an image (or list of images) and a list of possible **Actions**.

Developers can also model **Characters**. Each **Character** has an ID and a list of developer-defined properties. Actions can edit these properties and be programatically disabled by developers using these models.

Its programmed on Angular JS 2 and also uses Twitter Bootstrap.

## Modelling game

**Character** model example:

```
import { Character } from '../../engine/models/character';

export class Jane extends Character{
  constructor() {
    super();

    /* This identifier should be unique */
    this.id = 'jane';

    /* Properties is an open object, designed for storing information about the character
     * that will be manipulated by the game developer */
    this.properties = {
      charisma: 20,
      strength: 5,
      dexterity: 20
    }
  }
};

```

**Scene** model example:

```
import { Scene } from '../../engine/models/scene';
import { Action } from '../../engine/models/action';

import { CharacterService } from '../../engine/services/character.service';

class FirstAction extends Action{
  constructor() {
    super();

    /* Description of the action, will be printed on screen button */
    this.description = 'First action!';

    /* ID of scene the game will be redirected to after action is taken */
    this.nextSceneId = 'second-scene';
  }

  /*
   * Method called after action, allows developers to change the character model
   * as they see fit
   */
  processConsequences(characterService: CharacterService){
    var jane = characterService.getCharacterById( 'jane' );
    jane.properties.charisma += 10;
  }

  /*
   * Method called before displaying action, enabled developers to
   * create barriers to actions
   */
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

export class InitialScene extends Scene{
  constructor() {
    super();
    this.id = 'initial-scene';

    /* Add image URL for scene */
    this.images.push( 'assets/initial-scene-small.jpeg' );

    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

    /* Tells the game model this scene should be the first. Default is false */
    this.isFirstScene = true;

    this.actions.push(new FirstAction());
  }
};

```

**Game Model** example:

```
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
```

## Installation

After cloning the repository, change the game model as you see fit and run `npm start` to run a local server and start programming.

If you want to host your finished work, consult the manual for each web-server for hosting angular js 2. An example of Apache 2 can be found [here](https://github.com/mgechev/angular2-seed/wiki/Deploying-prod-build-to-Apache-2 "Deploying prod build to Apache 2").
