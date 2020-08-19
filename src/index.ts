import { User } from './models/User';

const user = new User({ id: 3 });

const { events } = user;

// register event listener
events.on('click', () => {
  console.info(`user clicked!`);
});

// execute event listener
events.trigger('click');
events.trigger('click');
