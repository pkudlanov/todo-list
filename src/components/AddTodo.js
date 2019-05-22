import Component from './Component.js';

class AddTodo extends Component {
    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newTodo = {
                task: formData.get('todo'),
                completed: false
            };

            onAdd(newTodo);
        });

        return form;
    }
    renderTemplate() {
        return /*html*/ `
            <form class="add-todo">
                <label for="todo">Task needing attention: <input type="text" name="todo"></label>
                <button class="submit-button">Add Task</button>
            </form>
        `;
    }
}

export default AddTodo;