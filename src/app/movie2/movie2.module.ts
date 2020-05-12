import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Movie2PageRoutingModule } from './movie2-routing.module';

import { Movie2Page } from './movie2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Movie2PageRoutingModule
  ],
  declarations: [Movie2Page]
})
export class Movie2PageModule {}
