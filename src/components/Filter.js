import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const fieldset = dom.querySelector('fieldset');

        fieldset.addEventListener('input', () => {
            const textInput = fieldset.elements['text-input'].value;
            const inputRadio = dom.querySelector('input[name="completeOrNot"]:checked').value;

            this.props.onFilter({
                text: textInput,
                condition: parseInt(inputRadio)
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section>
                <fieldset>
                    <legend>Filters</legend>
                    
                    <label>Text Search: <input class="search" type="text" name="text-input" placeholder="Search"></label>

                    <label><input id="all" class="radio" type="radio" name="completeOrNot" value="1" checked>All</label>
                    <label><input id="completed" class="radio" type="radio" name="completeOrNot" value="0">Completed</label>
                    <label><input id="not-completed" class="radio" type="radio" name="completeOrNot" value="-1">In Progress</label>
                </fieldset>
            </section>
        `;       
    }
}

export default Filter;