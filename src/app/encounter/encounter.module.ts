import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncounterComponent } from './encounter.component';


@NgModule({
  declarations: [
    EncounterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [EncounterComponent]
})
export class EncounterModule { }
