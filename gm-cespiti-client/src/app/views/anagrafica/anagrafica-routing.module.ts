import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnagraficheComponent } from './anagrafiche.component';
import { UtentiComponent } from './utenti.component';
import { DipendentiComponent } from './dipendenti.component';
import { ClientiComponent } from './clienti.component';
import { FornitoriComponent } from './fornitori.component';
import { SocietaComponent } from './societa.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anagrafica'
    },
    children: [
      {
        path: 'anagrafiche',
        component: AnagraficheComponent,
        data: {
          title: 'Anagrafiche'
        }
      },
      {
        path: 'utenti',
        component: UtentiComponent,
        data: {
          title: 'Utenti'
        }
      },
      {
        path: 'dipendenti',
        component: DipendentiComponent,
        data: {
          title: 'Dipendenti'
        }
      },
      {
        path: 'clienti',
        component: ClientiComponent,
        data: {
          title: 'Clienti'
        }
      },
      {
        path: 'fornitori',
        component: FornitoriComponent,
        data: {
          title: 'Fornitori'
        }
      },
      {
        path: 'societa',
        component: SocietaComponent,
        data: {
          title: 'Società'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnagraficaRoutingModule {}
