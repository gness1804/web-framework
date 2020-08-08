import { User } from './models/User';

const user = new User({ name: 'Bob', age: 67 });

user.on('click', () => {
  console.info('i got clicked!');
});
user.on('click', () => {
  console.info('i also got clicked!');
});
user.on('hover', () => {
  console.info('i am being hovered over!');
});

user.trigger('click');

user.trigger('not an event');
