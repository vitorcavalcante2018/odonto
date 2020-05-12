import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pdf3PageRoutingModule } from './pdf3-routing.module';

import { Pdf3Page } from './pdf3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pdf3PageRoutingModule
  ],
  declarations: [Pdf3Page]
})
export class Pdf3PageModule {}
