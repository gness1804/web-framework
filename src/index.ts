import { Collection } from './models/Collection';

const url = 'http://localhost:3000/users';

const collection = new Collection(url);

collection.on('change', () => {
  console.info('change event fired for collection:', collection);
});

collection.fetch();
