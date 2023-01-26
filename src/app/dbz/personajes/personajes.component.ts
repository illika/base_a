import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzService } from '../services/dbs.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  constructor(private dbzService: DbzService) { }

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  ngOnInit(): void {
  }

}
