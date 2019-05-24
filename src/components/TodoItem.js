import Component from './Component.js';

class TodoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        const todo = this.props.todo;
        const onRemove = this.props.onRemove;
        const onUpdate = this.props.onUpdate;

        const removeButton = listItem.querySelector('button');
        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });

        const checkbox = listItem.querySelector('input');
        
        checkbox.addEventListener('change', () => {
            onUpdate(todo);
        });

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
                <p>
                    <input class="checkbox" type="checkbox"${completed}>${todo.task}
                    <button class="remove-button">X</button>
                </p>
            </li>
        `;
    }
}

export default TodoItem;