import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Movie4Page } from './movie4.page';

const routes: Routes = [
  {
    path: '',
    component: Movie4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Movie4PageRoutingModule {}
