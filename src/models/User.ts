import { EventingI, UserPropsI, UserI } from '../types/types';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

const url = 'http://localhost:3000/users';

export class User implements UserI {
  public events: EventingI = new Eventing();
  public sync: Sync<UserPropsI> = new Sync<UserPropsI>(url);
  public attributes: Attributes<UserPropsI>;

  constructor(public data: UserPropsI) {
    this.attributes = new Attributes<UserPropsI>(data);
  }

  get get() {
    return this.attributes.get;
  }

  get trigger() {
    return this.events.trigger;
  }

  get on() {
    return this.events.on;
  }

  set(update: UserPropsI): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }
}
