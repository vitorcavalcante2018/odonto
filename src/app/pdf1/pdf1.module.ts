import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf1PageRoutingModule } from './pdf1-routing.module';

import { Pdf1Page } from './pdf1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf1PageRoutingModule
  ],
  declarations: [Pdf1Page]
})
export class Pdf1PageModule {}
