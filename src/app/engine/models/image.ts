export class Image {
  public index:number;
  public url:string;

  constructor(index: number, url: string) {
    this.index = index;
    this.url = url.replace( "assets", 'assets/1920px' );
  } 
}
