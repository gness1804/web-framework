import { AxiosResponse } from 'axios';

// type aliases
export type Callback = () => void;

// class interfaces
export interface EventingI {
  events: EventStorage;
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
// TODO: replace the any type
export interface SyncI {
  save(id: number, data: any): Promise<AxiosResponse>;
  fetch(id: number): Promise<AxiosResponse>;
}

export interface UserI {
  events: EventingI;
  sync: SyncI;
  get(propName: string): string | number;
  set(newData: UserPropsI): void;
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
