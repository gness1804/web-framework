import { AxiosPromise } from 'axios';

// type aliases
export type Callback = () => void;

// class interfaces
// TODO: replace the any type
export interface AttributesI {
  get(propName: any): any;
  set(newData: UserPropsI): void;
}

export interface EventingI {
  events: EventStorage;
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
// TODO: replace the any type
export interface SyncI {
  save(data: any): AxiosPromise;
  fetch(id: number): AxiosPromise;
  rootUrl: string;
}

export interface UserI {
  events: EventingI;
  sync: SyncI;
}

// other interfaces
export interface EventStorage {
  [key: string]: Callback[];
}

export interface UserPropsI {
  name?: string;
  age?: number;
  id?: number;
}

export interface WithId {
  id?: number;
}
