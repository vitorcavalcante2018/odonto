import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Movie4PageRoutingModule } from './movie4-routing.module';

import { Movie4Page } from './movie4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Movie4PageRoutingModule
  ],
  declarations: [Movie4Page]
})
export class Movie4PageModule {}
