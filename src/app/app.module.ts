import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EncounterModule } from './encounter/encounter.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EncounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
