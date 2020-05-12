import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf1Page } from './pdf1.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf1PageRoutingModule {}
