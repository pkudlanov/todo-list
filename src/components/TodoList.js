import Component from './Component.js';
import TodoItem from './TodoItem.js';
//import todos from '../../data/todo-list.js';

class TodoList extends Component {
    render() {
        const list = this.renderDOM();
        const todos = this.props.todos;

        todos.forEach(todo => {
            const todoItem = new TodoItem({ todo });
            const todoItemDOM = todoItem.render();
            list.appendChild(todoItemDOM);
        });

        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ol id="todos">
                <h3>I have things todo.</h3>
            </ol>
        `;
    }
}

export default TodoList;