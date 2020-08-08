import { UserI } from './types/types';
import { User } from './models/User';
import { AxiosResponse } from 'axios';

const user = new User({ id: 3 });

user.fetch().then((res: AxiosResponse): void => {
  console.info(res.data);
});
