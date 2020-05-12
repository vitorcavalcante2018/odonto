import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf3Page } from './pdf3.page';

const routes: Routes = [
  {
    path: '',
    component: Pdf3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pdf3PageRoutingModule {}
