import htmlToDOM from '../html-to-DOM.js';

class Component {
    constructor(props) {
        this.props = props;
    }

    render() {
        return this.renderDOM();
    }

    renderDOM() {
        const html = this.renderTemplate();
        const dom = htmlToDOM(html);
        // hey it works without it ;) at least for now
        // this.rootElement = dom;
        return dom;
    }
}

export default Component;