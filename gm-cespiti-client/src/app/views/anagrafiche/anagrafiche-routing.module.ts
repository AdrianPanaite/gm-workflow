import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnagraficaComponent } from './anagrafica.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anagrafiche'
    },
    children: [
      {
        path: 'anagrafica',
        component: AnagraficaComponent,
        data: {
          title: 'Anagrafica'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnagraficheRoutingModule {}
