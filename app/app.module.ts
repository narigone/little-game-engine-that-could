import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ViewSceneComponent }  from './engine/components/view-scene.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ViewSceneComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
