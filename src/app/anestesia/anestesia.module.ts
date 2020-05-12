import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnestesiaPageRoutingModule } from './anestesia-routing.module';

import { AnestesiaPage } from './anestesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnestesiaPageRoutingModule
  ],
  declarations: [AnestesiaPage]
})
export class AnestesiaPageModule {}
