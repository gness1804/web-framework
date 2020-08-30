import { AttributesI } from '../types/types';

export class Attributes<T> implements AttributesI {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(newData: T): void {
    this.data = { ...this.data, ...newData };
  }
}
