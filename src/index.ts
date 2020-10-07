import { UserPropsI } from './types/types';
import { User } from './models/User';
import { Collection } from './models/Collection';

const url = 'http://localhost:3000/users';

const collection = new Collection<User, UserPropsI>(url, (data: UserPropsI) =>
  User.buildUser(data),
);

collection.on('change', () => {
  console.info('change event fired for collection:', collection);
});

collection.fetch();
console.info('models', collection.models);
