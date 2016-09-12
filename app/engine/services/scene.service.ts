import { Injectable } from '@angular/core';
import { Scene } from '../models/scene';

@Injectable()
export class SceneService {
  private scenes: Scene[] = [];

  constructor() {
  }

  getFirstScene(): Scene{
    for( var i = 0; i < this.scenes.length; i ++ ){
      if( this.scenes[i].isFirstScene == true ){
        return this.scenes[i];
      }
    }
    return null;
  }

  getSceneById(id): Scene{
    for( var i = 0; i < this.scenes.length; i ++ ){
      if( this.scenes[i].id == id ){
        return this.scenes[i];
      }
    }
    return null;
  }

  addScene(scene:Scene) : void {
    this.scenes.push(scene);
  }

}
