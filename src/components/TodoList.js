import Component from './Component.js';

class TodoList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ol id="todos">
                <li>I need to put on my coat</li>
            </ol>
        `;
    }
}

export default TodoList;