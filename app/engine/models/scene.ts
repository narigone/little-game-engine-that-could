import { Action } from './action';

export class Scene{
  public id:string = '';
  public images: string[] = [];
  public description:string = '';
  public isFirstScene:boolean = false;
  public actions: Action[] = [];
}
