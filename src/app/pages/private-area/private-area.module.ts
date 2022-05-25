import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivateAreaPageRoutingModule } from './private-area-routing.module';

import { PrivateAreaPage } from './private-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivateAreaPageRoutingModule
  ],
  declarations: [PrivateAreaPage]
})
export class PrivateAreaPageModule {}
