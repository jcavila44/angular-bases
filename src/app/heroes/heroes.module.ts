import { NgModule } from "@angular/core";
import { ListComponent } from "./components/heroes/list/list.component";
import { HeroComponent } from "./components/heroes/hero/hero.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        HeroComponent,
        ListComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeroComponent,
        ListComponent,
    ]
})
export class HeroesModule {

}
