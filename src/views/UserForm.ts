import { UserFormI } from './../types/types';

export class UserForm implements UserFormI {
  parent: HTMLElement;

  createTemplate(): string {
    return `
      <p>Hello</p>
    `;
  }

  render(): void {}
}
