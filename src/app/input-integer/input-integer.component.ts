import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  
  @Input()
  cantidad: number = 0;

  @Input()
  max: number = 0;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>()

  @Output()
  maximoAlcanzado: EventEmitter<string> = new EventEmitter<string>()
  

  bajarCantidad(): void {
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  subirCantidad(): void {
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.maximoAlcanzado.emit("Se alcanzó el máximo de este producto")
    }

  }

  cambiarCantidad(): void {
    this.cantidadChange.emit(this.cantidad);
  }

}
