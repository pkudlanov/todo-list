import App from './components/App.js';
import todos from '../data/todo-list.js';
import todoApi from './todo-api.js';

todoApi.saveAll(todos);

const app = new App();
const appDOM = app.render();

const root = document.getElementById('app');
root.appendChild(appDOM);