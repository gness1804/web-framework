import { EventObjI, UserFormI } from '../types/types';

export class UserForm implements UserFormI {
  constructor(public parent: HTMLElement) {}

  implementEventsMap(): EventObjI {
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

  render(): void {
    const templateElement: HTMLTemplateElement = document.createElement(
      'template',
    );
    templateElement.innerHTML = this.createTemplate();
    this.parent.append(templateElement.content);
  }
}
