import { UserForm } from './views/UserForm';
const parentElement = document.getElementById('root');

const userForm = new UserForm(parentElement);
userForm.render();
