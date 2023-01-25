import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = [
    "Spider-Man",
    "IronMan",
    "Hulk",
    "Thor",
  ];

  heroe: string = "";

  borrar() {
    this.heroe = this.heroes?.shift() ?? "";    
  }

}
