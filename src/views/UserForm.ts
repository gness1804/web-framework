import { UserFormI } from './../types/types';

export class UserForm implements UserFormI {
  constructor(public parent: HTMLElement) {}

  createTemplate(): string {
    return `
      <p>Hello</p>
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
