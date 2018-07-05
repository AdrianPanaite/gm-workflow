import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AnagraficaComponent } from './anagrafica.component';

import { AnagraficheRoutingModule } from './anagrafiche-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    AnagraficheRoutingModule,
    FormsModule
  ],
  declarations: [
    AnagraficaComponent,
  ]
})
export class AnagraficheModule { }
