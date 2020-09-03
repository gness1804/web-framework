import { User } from './models/User';

const user = new User({ name: 'Kenneth', age: 50 });

const name = user.get('name');
console.info('name', name);

user.on('change', () => {
  console.info('change event triggered');
});

user.set({ name: 'Phil' }); // triggers change event
