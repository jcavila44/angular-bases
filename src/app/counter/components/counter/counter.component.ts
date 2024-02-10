import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.scss'
})
export class CounterComponent {
    public title: string = 'Bienvenido al curso de angular mi papacho';
    public counter: number = 100;

    increaseBy(value: number): void {
        this.counter = this.counter + value;
    }


    resetCounter() {
        this.counter = 100;
    }
}
