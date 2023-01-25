import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Contador App';

  numero: number = 0;
  base : number = 10;

  aumentar(): void {
    this.numero += 1;
  }

  disminuir(): void {
    this.numero -= 1;
  }

  acumular(valor: number): void {
    this.numero += valor;
  }
}
