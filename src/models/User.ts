interface UserDataI {
  name?: string;
  age?: number;
}

interface UserI {
  get(propName: string): string | number;
  set(newData: UserDataI): void;
}

export class User implements UserI {
  constructor(private data: UserDataI) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserDataI): void {
    this.data = { ...this.data, ...newData };
  }
}
