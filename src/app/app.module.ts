import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgSvgridModule} from '../../projects/ng-svgrid/src/public-api';

import {AppComponent} from './app.component';
import * as Components from './components';

@NgModule({
  imports: [
    BrowserModule,
    NgSvgridModule
  ],
  declarations: [
    AppComponent,
    Components.UmlItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
