import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf4Page } from './pdf4.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf4PageRoutingModule {}
