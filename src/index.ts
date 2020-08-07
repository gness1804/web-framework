import { User } from './models/User';

const user = new User({ name: 'Bob', age: 67 });

const name = user.get('name');
const age = user.get('age');

console.info(`The user's name is ${name}`);
console.info(`The age's name is ${age}`);
