import { UserI } from './types/types';
import { User } from './models/User';
import { AxiosResponse } from 'axios';

const user = new User({ id: 3 });

user.events.on('click', () => {
  console.info(`user clicked!`);
});
user.events.trigger('click');
