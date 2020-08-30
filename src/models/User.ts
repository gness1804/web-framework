import { EventingI, UserPropsI, UserI } from '../types/types';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

const url = 'http://localhost:3000/users';

export class User implements UserI {
  public events: EventingI = new Eventing();
  public sync: Sync<UserPropsI> = new Sync<UserPropsI>(url);
}
