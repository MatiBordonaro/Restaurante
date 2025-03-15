import { Component } from '@angular/core';
import { Comida } from './menu';
import { CarritoMenuService } from '../carrito-menu.service';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  comidas: Comida[] = [
    {
      nombre: "Hamburguesa",
      precio: 1500,
      categoria: "Plato principal",
      imagen: "img/hambur.jpg",
      stock: 5,
      oferta: false,
      cantidad: 0
    },
    {
      nombre: "Papas fritas",
      precio: 850,
      categoria: "Entrada",
      imagen: "img/papas.jpg",
      stock: 0,
      oferta: false,
      cantidad: 0
    },
    {
      nombre: "Helado",
      precio: 1300,
      categoria: "Postre",
      imagen: "img/helado.jpeg",
      stock: 6,
      oferta: true,
      cantidad: 0
    },
  ]

  constructor(private carrito: CarritoMenuService){}

  agregarAlCarrito(comida: Comida): void{
    this.carrito.agregarAlCarrito(comida);
    comida.stock -= comida.cantidad;
    comida.cantidad = 0;
  }

  maximoAlcanzado(m: String){
    alert(m);
  }
}
