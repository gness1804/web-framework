import { UserPropsI, RegionsMapI } from './../types/types';
import { User } from './../models/User';
import { View } from './View';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserPropsI> {
  constructor(public parent: Element, public model: User) {
    super(parent, model);
    this.bindModel();
  }

  returnRegionsMap(): RegionsMapI {
    return {
      UserShow: '.user-show',
      UserForm: '.user-form',
    };
  }

  onRender(): void {
    new UserShow(this.regions.UserShow, this.model).render();
    new UserForm(this.regions.UserForm, this.model).render();
  }

  createTemplate(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
