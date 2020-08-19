import { EventingI, UserPropsI, UserI } from '../types/types';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export class User implements UserI {
  public events: EventingI = new Eventing();
  public sync = new Sync<UserPropsI>();

  constructor(private data: UserPropsI) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserPropsI): void {
    this.data = { ...this.data, ...newData };
  }
}
