import { AttributesI, EventingI, SyncI, WithId } from '../types/types';
import { AxiosResponse } from 'axios';

export class Model<T extends WithId> {
  constructor(
    private attributes: AttributesI<T>,
    private events: EventingI,
    private sync: SyncI<T>,
  ) {}

  get get() {
    return this.attributes.get;
  }

  get trigger() {
    return this.events.trigger;
  }

  get on() {
    return this.events.on;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number')
      throw new Error('Cannot fetch without a valid id that is a number.');

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    const data = this.attributes.getAll();
    this.sync
      .save(data)
      .then((res: AxiosResponse<T>): void => {
        this.events.trigger('save', res.data);
      })
      .catch((err) => {
        console.error(`Problem saving data: ${err}`);
      });
  }
}
