import { User } from './models/User';

const user = new User({ name: 'Kenneth', age: 50 });

const name = user.get('name');
console.info('name', name);

user.on('click', () => {
  console.info('I clicked!');
});

user.trigger('click');
user.trigger('click');
