import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbs.service';

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

  constructor(private dbzService: DbzService) { }

  agregarPersonaje() {

    if (this.personaje.nombre.trim().length === 0) return;

    this.dbzService.agregarPersonaje(this.personaje);

    this.personaje = {
      nombre: "",
      poder: 0,
    }

  }

}
