import { Injectable } from '@angular/core';
import { SceneService } from './services/scene.service';
import { CharacterService } from './services/character.service';

import { Scene } from './models/scene';
import { Module } from './models/module';

export class BaseGameModel {
  private modules: Module[] = [];

  constructor(private characterService: CharacterService, private sceneService: SceneService) {
    this.initModules();
    this.setupModules();
  }

  initModules() : void {
    throw new Error("Must implement method initModules");
  }

  addModule( module : Module ) : void {
    this.modules.push(module);
  }

  setupModules() : void {
    for( var i = 0; i < this.modules.length; i ++ ){
      let module = this.modules[i];
      module.setupScenes(this.sceneService);
      module.setupCharacters(this.characterService);
    }
  }

  getSceneById( id: String ): Scene {
    return this.sceneService.getSceneById( id );
  }

  getFirstScene(): Scene {
    return this.sceneService.getFirstScene();
  }

  getSceneList(): Scene[] {
    return this.sceneService.getAllScenes();
  }
}
