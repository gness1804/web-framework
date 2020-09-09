import { Callback, EventingI, EventStorage } from '../types/types';

export class Eventing implements EventingI {
  events: EventStorage = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    this.events[eventName] = [...handlers, callback];
  };

  trigger = (eventName: string, addlData?: any): void => {
    const handlers = this.events[eventName];
    if (!handlers?.length) return;

    for (const handler of handlers) {
      handler(addlData);
    }
  };
}
