import { Callback, EventStorage, UserDataI, UserI } from '../types/types';

export class User implements UserI {
  events: EventStorage = {};

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
  // will get to this later
  trigger(eventName: string): void {}
}
