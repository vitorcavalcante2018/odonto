import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnMandibulaPage } from './tecn-mandibula.page';

const routes: Routes = [
  {
    path: '',
    component: TecnMandibulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnMandibulaPageRoutingModule {}
