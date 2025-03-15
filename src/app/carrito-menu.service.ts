import { Injectable, OnInit } from '@angular/core';
import { Comida } from './menu/menu';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoMenuService implements OnInit{

  private _listaCarrito: Comida[] = [];
  listaCarrito: BehaviorSubject<Comida[]> = new BehaviorSubject(this._listaCarrito);

  constructor() { }

  agregarAlCarrito(comida: Comida) {
    let item: Comida | undefined = this._listaCarrito.find((v1) => v1.nombre == comida.nombre);
    if(!item){
      this._listaCarrito.push({ ... comida});
    } else {
      item.cantidad += comida.cantidad;
    }
    this.listaCarrito.next(this._listaCarrito);
  }

  ngOnInit(): void {
    
  }

}
