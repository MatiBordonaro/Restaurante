import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { FormsModule } from '@angular/forms';
import { RestauranteMenuComponent } from './restaurante-menu/restaurante-menu.component';
import { RestauranteContactoComponent } from './restaurante-contacto/restaurante-contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RestauranteMenuComponent,
    RestauranteContactoComponent,
    CarritoComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
