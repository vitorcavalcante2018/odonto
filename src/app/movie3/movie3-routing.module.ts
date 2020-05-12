import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Movie3Page } from './movie3.page';

const routes: Routes = [
  {
    path: '',
    component: Movie3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Movie3PageRoutingModule {}
