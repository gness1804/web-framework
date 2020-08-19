import axios, { AxiosPromise } from 'axios';
import { SyncI, WithId } from '../types/types';

export class Sync<T extends WithId> implements SyncI {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) return axios.put(`${this.rootUrl}/${id}`, data);
    return axios.post(this.rootUrl, data);
  }
}
