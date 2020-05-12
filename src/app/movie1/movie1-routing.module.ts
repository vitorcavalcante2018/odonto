import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Movie1Page } from './movie1.page';

const routes: Routes = [
  {
    path: '',
    component: Movie1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Movie1PageRoutingModule {}
