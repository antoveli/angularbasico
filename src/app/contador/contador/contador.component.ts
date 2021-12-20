import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h3>La base es: <strong>{{base}}</strong> </h3>
    <button (click)="acumular( base )"> + {{ base }}</button>
    <span>{{numero3}}</span>
    <button (click)= "acumular(-base)"> - {{base}} </button>
    `
})

export class ContadorComponent {
    numero: number = 10;
    numero2: number = 5;
    numero3: number = 10;
    base: number = 5;

    sumar() {
        this.numero2 += 1;
    }

    acumular(valor: number) {
        this.numero3 += valor;
    }

}