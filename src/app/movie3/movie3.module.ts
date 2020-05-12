import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Movie3PageRoutingModule } from './movie3-routing.module';

import { Movie3Page } from './movie3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Movie3PageRoutingModule
  ],
  declarations: [Movie3Page]
})
export class Movie3PageModule {}
