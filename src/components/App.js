import Component from './Component.js';
import todos from '../../data/todo-list.js';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const main = dom.querySelector('main');

        const addTodo = new AddTodo({
            onAdd: (newTodo) => {
                todos.unshift(newTodo);
                todoList.update({ todos });
            }
        });

        const addTodoDOM = addTodo.render();
        main.appendChild(addTodoDOM);

        const todoList = new TodoList({ todos });

        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <h2>Things Todo</h2>
                </main>
            </div>
        `;
    }
}

export default App;