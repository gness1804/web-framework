import { User } from './../models/User';
import { EventObjI, UserFormI } from '../types/types';

export class UserForm implements UserFormI {
  constructor(public parent: HTMLElement, public model: User) {}

  returnEventsMap(): EventObjI {
    return {
      'click:button.set-age-btn': this.onRandomAgeButtonClick,
    };
  }

  onRandomAgeButtonClick = (): void => {
    this.model.setRandomAge();
  };

  createTemplate(): string {
    return `
      <h1>User Form</h1>
      <p>User name: ${this.model.get('name')}</p>
      <p>User age: ${this.model.get('age')}</p>
      <input />
      <button>Click Me</button>
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
    const templateElement: HTMLTemplateElement = document.createElement(
      'template',
    );
    templateElement.innerHTML = this.createTemplate();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
