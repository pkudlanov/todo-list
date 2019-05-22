import Component from './Component.js';

class TodoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;

        return /*html*/ `
            <li class="list-item">
                <p><input class="checkbox" type="checkbox"${todo.completed}>${todo.task}</p>
            </li>
        `;
    }
}

export default TodoItem;