import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: ':num2/registro-usuario',
    loadChildren: () => import('./pages/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: ':num8/menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: ':num6/disponibilidad',
    loadChildren: () => import('./pages/disponibilidad/disponibilidad.module').then( m => m.DisponibilidadPageModule)
  },
  {
    path: 'confirmacion-solicitud',
    loadChildren: () => import('./pages/confirmacion-solicitud/confirmacion-solicitud.module').then( m => m.ConfirmacionSolicitudPageModule)
  },
  {
    path: ':num5/solicitar',
    loadChildren: () => import('./pages/solicitar/solicitar.module').then( m => m.SolicitarPageModule)
  },
  {
    path: ':num3/recuperar-password',
    loadChildren: () => import('./pages/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: ':num4/envo-correo',
    loadChildren: () => import('./pages/envo-correo/envo-correo.module').then( m => m.EnvoCorreoPageModule)
  },
  {
    path: ':num7/add-auto',
    loadChildren: () => import('./pages/add-auto/add-auto.module').then( m => m.AddAutoPageModule)
  },


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
