import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AnagraficheComponent } from './anagrafiche.component';
import { UtentiComponent } from './utenti.component';
import { DipendentiComponent } from './dipendenti.component';
import { ClientiComponent } from './clienti.component';
import { FornitoriComponent } from './fornitori.component';
import { SocietaComponent } from './societa.component';

import { AnagraficaRoutingModule } from './anagrafica-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    AnagraficaRoutingModule,
    FormsModule
  ],
  declarations: [
    AnagraficheComponent,
    UtentiComponent,
    DipendentiComponent,
    ClientiComponent,
    FornitoriComponent,
    SocietaComponent
  ]
})
export class AnagraficaModule { }
