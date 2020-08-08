interface UserDataI {
  name: string;
  age: number;
}

interface UserDataUpdateI {
  name?: string;
  age?: number;
}

interface UserI {
  get(propName: string): string | number;
  set(newData: UserDataUpdateI): void;
}

export class User implements UserI {
  constructor(private data: UserDataI) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserDataUpdateI): void {
    this.data = { ...this.data, ...newData };
  }
}
