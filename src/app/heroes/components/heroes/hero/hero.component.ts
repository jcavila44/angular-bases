import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
    public name: string = 'ironman';
    public age: number = 123;



    get getCapitalizedName(): string {
        return this.name;
    }



    get getHeroDescription(): string {
        return `${this.name} - ${this.age}`
    }


    changeName(): void {
        console.log("sias manitos");

        this.name = 'Argemiro';
    }

    changeAge(): void {
        this.age = 13;

    }


    resetForm(): void {
        this.name = 'Ironman';
        this.age = 123123;

    }


}
