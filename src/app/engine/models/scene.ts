import { Action } from './action';
import { Image } from './image';

export class Scene{
  public id:string = '';
  public images: string[] = [];
  public description:string = '';
  public isFirstScene:boolean = false;
  public actions: Action[] = [];

  getImageList() : Image[] {
    let result = new Array<Image>();

    if( this.images == null ){
      return result;
    }

    for( let i = 0; i < this.images.length; i++ ){
      let image = new Image(i, this.images[i]);
      result.push(image);
    }

    return result;
  }
}
