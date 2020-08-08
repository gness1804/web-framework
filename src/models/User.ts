import { Callback, EventStorage, UserDataI, UserI } from '../types/types';
import axios, { AxiosResponse } from 'axios';

export class User implements UserI {
  events: EventStorage = {};
  private url = 'http://localhost:3000/users';

  constructor(private data: UserDataI) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserDataI): void {
    this.data = { ...this.data, ...newData };
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    this.events[eventName] = [...handlers, callback];
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers?.length) return;

    for (const handler of handlers) {
      handler();
    }
  }

  save(): Promise<AxiosResponse> {
    return axios.post(this.url, {
      name: this.data.name,
      age: this.data.age,
    });
  }

  fetch(): Promise<void> {
    return axios
      .get(`${this.url}/${this.data.id}`)
      .then((res: AxiosResponse) => {
        this.set(res.data);
      });
  }
}
