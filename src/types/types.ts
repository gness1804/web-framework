// type aliases
export type Callback = () => void;

// class interfaces
export interface UserI {
  events: EventStorage;
  get(propName: string): string | number;
  set(newData: UserDataI): void;
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
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
