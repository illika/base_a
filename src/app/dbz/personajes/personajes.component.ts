import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {


  @Input()
  personajes: Personaje[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
