import { UserI } from './types/types';
import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();
