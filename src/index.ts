import { User } from './models/User';

const ken = User.buildUser({ id: 1, name: 'Kenneth' });

ken.on('change', () => {
  console.info('User data:', ken);
});

ken.on('save', (info?: any) => {
  console.info('Saved user data.');
  console.info('data:', info);
});

ken.fetch();
ken.save();
ken.get('id');
