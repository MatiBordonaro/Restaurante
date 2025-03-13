import { Component } from '@angular/core';
import { Comida } from './menu';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  comidas: Comida[] = [
    {
      nombre: "Hamburguesa completa",
      precio: 1500,
      categoria: "Plato principal",
      imagen: "img/hambcompleta.png",
      stock: 5,
      oferta: false,
      cantidad: 0
    },
    {
      nombre: "Papas fritas",
      precio: 850,
      categoria: "Entrada",
      imagen: "img/papas.jpeg",
      stock: 0,
      oferta: false,
      cantidad: 0
    },
    {
      nombre: "Helado",
      precio: 1300,
      categoria: "Postre",
      imagen: "img/helado.png",
      stock: 6,
      oferta: true,
      cantidad: 0
    },
  ]

  downCantidad(comida: Comida){
    if(comida.cantidad > 0)
      comida.cantidad--;
  }

  upCantidad(comida: Comida){
    if(comida.cantidad < comida.stock)
      comida.cantidad++;
  }
}
