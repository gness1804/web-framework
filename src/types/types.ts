import { AxiosPromise } from 'axios';
import { User } from '../models/User';

// type aliases
export type Callback = (addlData?: any) => void;

// class interfaces - models
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

// class interfaces - views
export interface UserFormI {
  createTemplate: () => string;
  returnEventsMap: () => EventObjI;
  onRandomAgeButtonClick: () => void;
  onSetNameButtonClick: () => void;
}

export interface ViewI<T> {
  parent: HTMLElement;
  model: T;
  render: () => void;
  bindModel: () => void;
  bindEvents: (fragment: DocumentFragment) => void;
  createTemplate: () => string;
  returnEventsMap: () => EventObjI;
}

// other interfaces
export interface EventObjI {
  [key: string]: () => void;
}

export interface EventStorage {
  [key: string]: Callback[];
}

export interface UserPropsI {
  name?: string;
  age?: number;
  id?: number;
}

export interface ViewRequiredMembersI {
  on: (event: string, callback: () => void) => void;
}

export interface WithId {
  id?: number;
}
