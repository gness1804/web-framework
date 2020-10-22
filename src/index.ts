import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
const parentElement = document.getElementById('root');

const user = User.buildUser({ name: 'Ken', age: 50 });

if (parentElement) {
  const userEdit = new UserEdit(parentElement, user);
  userEdit.render();
} else {
  throw new Error('Error: root element not found!');
}
