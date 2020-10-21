import { UserPropsI } from './../types/types';
import { User } from './../models/User';
import { EventObjI, UserFormI } from '../types/types';
import { View } from './View';

export class UserForm extends View<User, UserPropsI> implements UserFormI {
  constructor(public parent: HTMLElement, public model: User) {
    super(parent, model);
    this.bindModel();
  }

  returnEventsMap(): EventObjI {
    return {
      'click:button.set-age-btn': this.onRandomAgeButtonClick,
      'click:button.set-name-btn': this.onSetNameButtonClick,
    };
  }

  onRandomAgeButtonClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameButtonClick = (): void => {
    const input = <HTMLInputElement>document.querySelector('.name-input');

    if (input) {
      const name = input.value;
      if (!name) {
        alert('Oops, you must enter a name! Try again please.');
        return;
      }

      this.model.set({ name });
    }
  };

  createTemplate(): string {
    return `
      <h1>User Form</h1>
      <p>User name: ${this.model.get('name')}</p>
      <p>User age: ${this.model.get('age')}</p>
      <input placeholder="Enter your name" class="name-input" />
      <button class="set-name-btn">Set Name</button>
      <button class="set-age-btn">Set Random Age</button>
    `;
  }
}
