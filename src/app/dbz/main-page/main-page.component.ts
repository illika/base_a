import { Component } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbs.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) { }

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000,
    },
    {
      nombre: "Vegeta",
      poder: 14500,
    }
  ];

  personaje: Personaje = {
    nombre: "Goten",
    poder: 10001,
  }

  handleNuevoPj(arg: Personaje) {
    this.personajes.push(arg);
  }


}
