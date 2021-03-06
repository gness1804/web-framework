import { UserPropsI } from './../types/types';
import { User } from './../models/User';
import { View } from './View';

export class UserShow extends View<User, UserPropsI> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
    this.bindModel();
  }

  createTemplate(): string {
    return `
      <div>
        <h1>User name: ${this.model.get('name')}</h1>
        <h1>User age: ${this.model.get('age')}</h1>
      </div>
    `;
  }
}
