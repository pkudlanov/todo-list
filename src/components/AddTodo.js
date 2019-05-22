import Component from './Component.js';

class AddTodo extends Component {
    renderTemplate() {
        return /*html*/ `
            <form class="add-todo">
                <label for="todo">Task needing attention: <input type="text" name="todo"></label>
                <button>Add Task</button>
            </form>
        `;
    }
}

export default AddTodo;