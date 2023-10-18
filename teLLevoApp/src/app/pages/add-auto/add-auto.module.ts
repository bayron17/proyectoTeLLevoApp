import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAutoPageRoutingModule } from './add-auto-routing.module';

import { AddAutoPage } from './add-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAutoPageRoutingModule
  ],
  declarations: [AddAutoPage]
})
export class AddAutoPageModule {}
