import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvoCorreoPageRoutingModule } from './envo-correo-routing.module';

import { EnvoCorreoPage } from './envo-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvoCorreoPageRoutingModule
  ],
  declarations: [EnvoCorreoPage]
})
export class EnvoCorreoPageModule {}
