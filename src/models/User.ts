import { Collection } from './Collection';
import { UserPropsI } from '../types/types';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';

const url = 'http://localhost:3000/users';

export class User extends Model<UserPropsI> {
  static buildUser(attrs: UserPropsI) {
    return new User(
      new Attributes<UserPropsI>(attrs),
      new Eventing(),
      new ApiSync<UserPropsI>(url),
    );
  }

  static buildCollection(url: string): Collection<User, UserPropsI> {
    return new Collection<User, UserPropsI>(url, (data: UserPropsI) =>
      User.buildUser(data),
    );
  }

  setRandomAge(): void {
    this.set({ age: Math.round(Math.random() * 100) });
  }
}
