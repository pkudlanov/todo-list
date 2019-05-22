import Component from './Component.js';
import todos from '../../data/todo-list.js';

class TodoList extends Component {
    render() {
        const list = this.renderDOM();

        return list;
    }

    renderTemplate() {
        return /*html*/ `
            <ol id="todos">
                <h3>I have ${todos.length} things todo.</h3>
                <li>${todos[0].task}</li>
                <li>${todos[1].task}</li>
            </ol>
        `;
    }
}

export default TodoList;