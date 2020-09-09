import { AxiosPromise } from 'axios';
import { Attributes } from '../models/Attributes';

// type aliases
export type Callback = (addlData?: any) => void;

// class interfaces
export interface AttributesI<T> {
  get<K extends keyof T>(key: K): T[K];
  set(newData: T): void;
  getAll(): T;
}

export interface EventingI {
  events: EventStorage;
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string, data?: any): void;
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
  attributes: Attributes<UserPropsI>;
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
