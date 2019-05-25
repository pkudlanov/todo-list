import Component from './Component.js';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';
import Header from './Header.js';
import Filter from './Filter.js';
import filterTodos from '../filter-todos.js';
import todoApi from '../todo-api.js';

const todos = todoApi.getAll();

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addTodo = new AddTodo({
            onAdd: (newTodo) => {
                todos.unshift(newTodo);
                todoList.update({ todos });
                todoApi.saveAll(todos);
            }
        });

        const addTodoDOM = addTodo.render();
        main.appendChild(addTodoDOM);

        const purifier = new Filter({
            onFilter: purifier => {
                const filtered = filterTodos(todos, purifier);
                todoList.update({ todos: filtered });
            }
        });
        const filterToDOM = purifier.render();
        main.appendChild(filterToDOM);

        const todoList = new TodoList({
            todos,
            onRemove: (todoToRemove) => {
                const index = todos.indexOf(todoToRemove);
                todos.splice(index, 1);
                todoList.update({ todos });
                todoApi.saveAll(todos);
                purifier.update();
            },
            onUpdate: (todoToUpdate) => {
                todoToUpdate.completed = !todoToUpdate.completed;
                todoList.update({ todos });
                todoApi.saveAll(todos);
            }
        });

        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;