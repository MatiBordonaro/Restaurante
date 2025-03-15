import { Component } from '@angular/core';
import { CarritoMenuService } from '../carrito-menu.service';
import { Comida } from '../menu/menu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  listaCarrito$: Observable<Comida[]>;

  constructor(private carrito: CarritoMenuService){  
    this.listaCarrito$ = carrito.listaCarrito.asObservable();
  }
}
