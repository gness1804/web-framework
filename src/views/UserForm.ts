import { User } from './../models/User';
import { EventObjI, UserFormI } from '../types/types';

export class UserForm implements UserFormI {
  constructor(public parent: HTMLElement, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
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
    const name = (<HTMLInputElement>document.querySelector('.name-input'))
      ?.value;
    if (!name) {
      alert('Oops, you must enter a name! Try again please.');
      return;
    }

    this.model.set({ name });
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

  bindEvents(fragment: DocumentFragment): void {
    const events = this.returnEventsMap();
    for (const eventsKey in events) {
      if ({}.hasOwnProperty.call(events, eventsKey)) {
        const [action, element] = eventsKey.split(':');
        fragment.querySelectorAll(element).forEach((elem) => {
          elem.addEventListener(action, events[eventsKey]);
        });
      }
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement: HTMLTemplateElement = document.createElement(
      'template',
    );
    templateElement.innerHTML = this.createTemplate();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
