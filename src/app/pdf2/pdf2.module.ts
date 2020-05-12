import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf2PageRoutingModule } from './pdf2-routing.module';

import { Pdf2Page } from './pdf2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf2PageRoutingModule
  ],
  declarations: [Pdf2Page]
})
export class Pdf2PageModule {}
