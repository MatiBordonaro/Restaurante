import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteMenuComponent } from './restaurante-menu/restaurante-menu.component';
import { RestauranteContactoComponent } from './restaurante-contacto/restaurante-contacto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: RestauranteMenuComponent
  },
  {
    path: 'contacto',
    component: RestauranteContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
