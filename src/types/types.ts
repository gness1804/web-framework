import { AxiosResponse } from 'axios';

// type aliases
export type Callback = () => void;

// class interfaces
export interface EventingI {
  events: EventStorage;
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface UserI {
  get(propName: string): string | number;
  set(newData: UserDataI): void;
  save(): Promise<AxiosResponse>;
  fetch(): Promise<AxiosResponse>;
}

// other interfaces
export interface EventStorage {
  [key: string]: Callback[];
}

export interface UserDataI {
  name?: string;
  age?: number;
  id?: number;
}
