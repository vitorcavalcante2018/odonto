import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf2Page } from './pdf2.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf2PageRoutingModule {}
