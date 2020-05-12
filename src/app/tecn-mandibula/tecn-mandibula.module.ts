import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecnMandibulaPageRoutingModule } from './tecn-mandibula-routing.module';

import { TecnMandibulaPage } from './tecn-mandibula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecnMandibulaPageRoutingModule
  ],
  declarations: [TecnMandibulaPage]
})
export class TecnMandibulaPageModule {}
