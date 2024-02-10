import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {

    @Input()
    public Inputcharacters: ICharacter[] = [];

    @Output()
    public OutputDeletedCharacters: EventEmitter<ICharacter> = new EventEmitter();

    onDeleteCharacter(character: ICharacter): void {
        this.OutputDeletedCharacters.emit(character);
    }

}
