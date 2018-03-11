import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EncounterComponent } from './encounter.component';


@NgModule({
  declarations: [
    EncounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [EncounterComponent]
})
export class EncounterModule { }
