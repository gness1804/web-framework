import axios, { AxiosResponse } from 'axios';
import { SyncI } from '../types/types';

export class Sync<T> implements SyncI {
  private url = 'http://localhost:3000/users';

  fetch(id: number): Promise<AxiosResponse<T>> {
    return axios.get(`${this.url}/${id}`);
  }

  save(id: number, data: T): Promise<AxiosResponse<T>> {
    if (id) {
      return axios.put(`${this.url}/${id}`, data);
    }
    return axios.post(this.url, data);
  }
}
