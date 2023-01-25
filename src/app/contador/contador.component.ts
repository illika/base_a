import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }} </h1>

        <h2>La base es {{ base }} </h2>

        <button (click)="acumular(+ base)">+ {{ base}}</button>
        <span> {{numero}} </span>
        <button (click)="acumular(- base)">- {{ base }} </button>
    `,
})
export class ContadorComponent {
    title: string = 'Contador App';

    numero: number = 0;
    base: number = 10;

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