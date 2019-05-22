import Component from './Component.js';

class TodoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;

        let completed = '';
        if(todo.completed){
            completed = ' checked';
        }
        return /*html*/ `
            <li class="list-item">
                <p><input class="checkbox" type="checkbox"${completed}>${todo.task}</p>
            </li>
        `;
    }
}

export default TodoItem;