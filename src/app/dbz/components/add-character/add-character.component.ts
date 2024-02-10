import { Component, EventEmitter, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
    selector: 'bdz-add-character',
    templateUrl: './add-character.component.html',
    styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent {


    @Output()
    public onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();


    character: ICharacter = {
        id: uuid(),
        name: 'Argemiro Ermitage',
        power: 12312321312321
    }


    emitCharacter(): void {
        if (this.character.name.length === 0) return;

        this.onNewCharacter.emit(this.character);
        this.character = { id: uuid(), name: '', power: 0 };

    }
}
