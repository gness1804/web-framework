import { User } from './models/User';
import { UserForm } from './views/UserForm';
const parentElement = document.getElementById('root');

const user = User.buildUser({ name: 'Ken', age: 50 });

const userForm = new UserForm(parentElement, user);
userForm.render();
