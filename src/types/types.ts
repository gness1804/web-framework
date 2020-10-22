import { User } from './../models/User';
import { AxiosPromise } from 'axios';
import { View } from '../views/View';

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
export interface UserFormI extends View<User, UserPropsI> {
  onRandomAgeButtonClick: () => void;
  onSetNameButtonClick: () => void;
  onSaveButtonClick: () => void;
}

export interface ViewI<T> {
  parent: Element;
  model: T;
  render: () => void;
  bindModel: () => void;
  bindEvents: (fragment: DocumentFragment) => void;
  createTemplate: () => string;
  returnEventsMap: () => EventObjI;
  returnRegionsMap: () => RegionsMapI;
  regions: RegionsI;
  mapRegions: (content: DocumentFragment) => void;
  onRender: () => void;
}

// other interfaces
export interface EventObjI {
  [key: string]: () => void;
}

export interface EventStorage {
  [key: string]: Callback[];
}

export interface RegionsMapI {
  // RegionName: .parent-element-selector
  [key: string]: string;
}

export interface RegionsI {
  // RegionName: RegionElement
  [key: string]: Element;
}

export interface UserPropsI {
  name?: string;
  age?: number;
  id?: number;
}
export interface WithId {
  id?: number;
}
