import { UserList } from './views/UserList';
import { UserPropsI } from './types/types';
import { User } from './models/User';
import { Collection } from './models/Collection';

const collection = new Collection<User, UserPropsI>(
  'http://localhost:3000/users',
  (json: UserPropsI) => User.buildUser(json),
);

collection.on('change', () => {
  const parentElement = document.getElementById('root');

  if (parentElement) new UserList(parentElement, collection).render();
});

collection.fetch();
