function listTemplate(todo) {
    let checked = '';

    if(todo.completed) {
        checked = ' checked';
    }
    return /*html*/ `
        <li class="list-item">
            <p><input class="checkbox" type="checkbox"${checked}>${todo.task}</p>
        </li>
    `;
}

export default listTemplate;