import { EventingI, UserPropsI, UserI } from '../types/types';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

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

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number')
      throw new Error('Cannot fetch without a valid id that is a number.');

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    const data = this.attributes.getAll();
    this.sync
      .save(data)
      .then((res: AxiosResponse<UserPropsI>): void => {
        this.events.trigger('save', res.data);
      })
      .catch((err) => {
        console.error(`Problem saving data: ${err}`);
      });
  }
}
