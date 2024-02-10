import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {

    public characters: ICharacter[] = [
        { id: uuid(), name: 'Krilling', power: 11000, },
        { id: uuid(), name: 'Goku', power: 1321321, },
    ];


    public onNewCharacter(character: ICharacter): void {
        this.characters.push(character);
    }

    public EmitOnDeletedCharacter(character: ICharacter): void {
        this.characters = this.characters.filter(({ id }) => id !== character.id);
    }
}
