import Component from './Component.js';
import todos from '../../data/todo-list.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        //const main = dom.querySelector('main');

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    <h2>There are ${todos.length} things that need attention!!</h2>
                </main>
            </div>
        `;
    }
}

export default App;