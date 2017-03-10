import { Action } from '../models/action';
import { Scene } from '../models/scene';

export class ActionIterator  {
  public actionGroups: Array<Array<Action>>;

  constructor(private scene: Scene, private groupSize?: number) {
    if( !groupSize ){
      this.groupSize = 4;
    }
    this.buildActionGroups(scene);
  }

  buildActionGroups(scene: Scene) : void {
    this.actionGroups = new Array<Array<Action>>();

    for( let i = 0, j = 0 ; i < scene.actions.length; i++ ){
      if( !this.actionGroups[ j ] ){
        this.actionGroups[ j ] = new Array<Action>();
      }

      this.actionGroups[ j ].push( scene.actions[ i ] );

      if( this.actionGroups[ j ].length == this.groupSize ){
        j++;
        this.actionGroups[ j ] = new Array<Action>();
      }
    }
    
  }
}
