import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PapaParseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
