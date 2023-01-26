import { Component } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

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