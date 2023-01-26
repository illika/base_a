import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input()
  personaje: Personaje = {
    nombre: "",
    poder: 0,
  };

  @Output()
  onNuevoPJ: EventEmitter<Personaje> = new EventEmitter();

  agregarPersonaje() {

    if (this.personaje.nombre.trim().length === 0) return;

    this.onNuevoPJ.emit(this.personaje);

    this.personaje = {
      nombre: "",
      poder: 0,
    }
    
  }

}
