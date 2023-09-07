import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvoCorreoPage } from './envo-correo.page';

const routes: Routes = [
  {
    path: '',
    component: EnvoCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvoCorreoPageRoutingModule {}
