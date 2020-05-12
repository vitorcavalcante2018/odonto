import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf4PageRoutingModule } from './pdf4-routing.module';

import { Pdf4Page } from './pdf4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf4PageRoutingModule
  ],
  declarations: [Pdf4Page]
})
export class Pdf4PageModule {}
