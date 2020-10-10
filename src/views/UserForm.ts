import { EventObjI, UserFormI } from '../types/types';

export class UserForm implements UserFormI {
  constructor(public parent: HTMLElement) {}

  returnEventsMap(): EventObjI {
    return {
      'click:button': this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.info('clicked the method.');
  }

  createTemplate(): string {
    return `
      <h1>User Form</h1>
      <input />
      <button>Click Me</button>
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
