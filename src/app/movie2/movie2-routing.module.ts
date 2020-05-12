import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Movie2Page } from './movie2.page';

const routes: Routes = [
  {
    path: '',
    component: Movie2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Movie2PageRoutingModule {}
