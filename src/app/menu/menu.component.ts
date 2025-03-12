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
      imagen: "img/hambcompleta.png"
    },
    {
      nombre: "Papas fritas",
      precio: 850,
      categoria: "Entrada",
      imagen: "img/papas.jpeg"
    },
    {
      nombre: "Helado",
      precio: 1300,
      categoria: "Postre",
      imagen: "img/helado.png"
    },
  ]
}
