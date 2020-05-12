import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Movie1PageRoutingModule } from './movie1-routing.module';

import { Movie1Page } from './movie1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Movie1PageRoutingModule
  ],
  declarations: [Movie1Page]
})
export class Movie1PageModule {}
