import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        return dom;
    }
    
    renderTemplate() {
        return /*html*/ `
            <section>
                <fieldset>
                    <legend>Filters</legend>
                    
                    <label>Text Search: <input class="search" type="text" placeholder="Search"></label>

                    <label><input id="all" class="radio" type="radio">All</label>
                    <label><input id="completed" class="radio" type="radio">Completed</label>
                    <label><input id="not-completed" class="radio" type="radio">In Progress</label>
                </fieldset>
            </section>
        `;       
    }
}

export default Filter;