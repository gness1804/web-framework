import { User } from './models/User';

const user = new User({ name: 'Bob', age: 67 });

user.on('click', () => {});
user.on('click', () => {});
user.on('hover', () => {});

console.info(user);
