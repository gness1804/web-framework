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
}
