import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/ `
            <header>
                <h1>Things that I need to do sometime when I feel like it
            </header>
        `;
    }
}

export default Header;