interface UserDataI {
  name: string;
  age: number;
}

export class User {
  constructor(private data: UserDataI) {}

  get(propName: string): string | number {
    return this.data[propName];
  }
}
