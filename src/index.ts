import { User } from './models/User';

const user = new User({ id: 1, name: 'Kenneth' });

user.on('change', () => {
  console.info('User data:', user);
});

user.on('save', (info?: any) => {
  console.info('Saved user data.');
  console.info('data:', info);
});

user.fetch();
user.save();
