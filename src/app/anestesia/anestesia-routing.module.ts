import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnestesiaPage } from './anestesia.page';

const routes: Routes = [
  {
    path: '',
    component: AnestesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnestesiaPageRoutingModule {}
