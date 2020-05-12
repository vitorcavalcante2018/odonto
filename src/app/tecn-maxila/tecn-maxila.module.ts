import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnMaxilaPageRoutingModule } from './tecn-maxila-routing.module';

import { TecnMaxilaPage } from './tecn-maxila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnMaxilaPageRoutingModule
  ],
  declarations: [TecnMaxilaPage]
})
export class TecnMaxilaPageModule {}
