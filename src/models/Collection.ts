import { UserPropsI } from '../types/types';
import axios, { AxiosResponse } from 'axios';
import { User } from './User';
import { Eventing } from './Eventing';

export class Collection {
  models: User[] = []; // TODO: change from User to generic type
  events: Eventing = new Eventing();

  constructor(public url: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.url).then((res: AxiosResponse) => {
      res.data.forEach((user: UserPropsI) => {
        this.models.push(User.buildUser(user));
      });
      this.trigger('change');
    });
  }
}
