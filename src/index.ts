import { User } from './models/User';

const url = 'http://localhost:3000/users';

const collection = User.buildCollection(url);

collection.on('change', () => {
  console.info('change event fired for collection:', collection);
});

collection.fetch();
console.info('models', collection.models);
