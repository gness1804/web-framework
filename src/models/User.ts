import { Callback, EventStorage, UserDataI, UserI } from '../types/types';
import axios, { AxiosResponse } from 'axios';

export class User implements UserI {
  private url = 'http://localhost:3000/users';

  constructor(private data: UserDataI) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserDataI): void {
    this.data = { ...this.data, ...newData };
  }

  save(): Promise<AxiosResponse> {
    const { id } = this.data;
    if (id) {
      return axios.put(`${this.url}/${id}`, this.data);
    }
    return axios.post(this.url, this.data);
  }

  fetch(): Promise<AxiosResponse> {
    return axios.get(`${this.url}/${this.data.id}`);
  }
}
