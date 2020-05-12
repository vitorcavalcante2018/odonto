import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecnMaxilaPage } from './tecn-maxila.page';

const routes: Routes = [
  {
    path: '',
    component: TecnMaxilaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnMaxilaPageRoutingModule {}
