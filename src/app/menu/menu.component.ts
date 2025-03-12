import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  hambur = {
    "nombre": "Hamburguesa completa",
    "precio": "1500",
    "categoria": "Plato principal",
    "imagen": "img/hambcompleta.png"
  }
}
