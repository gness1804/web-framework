import { AxiosPromise } from 'axios';

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

export interface SyncI<T> {
  save(data: T): AxiosPromise<T>;
  fetch(id: number): AxiosPromise<T>;
  rootUrl: string;
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
