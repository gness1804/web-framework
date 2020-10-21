import { User } from './models/User';
import { UserForm } from './views/UserForm';
const parentElement = document.getElementById('root');

const user = User.buildUser({ name: 'Ken', age: 50 });

if (parentElement) {
  const userForm = new UserForm(parentElement, user);
  userForm.render();
} else {
  throw new Error('Error: root element not found!');
}
