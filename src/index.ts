import { User } from './models/User';

const user = new User({ name: 'Kenneth' });
const name = user.attributes.get('name');
console.info('name', name);

const { events } = user;

// register event listener
events.on('click', () => {
  console.info(`user clicked!`);
});

// execute event listener
events.trigger('click');
events.trigger('click');
