import todo from "./data";

function listTemplate(todo) {
    return /*html*/ `
        <li class="list-item">
            <p><input class="checkbox" type="checkbox">${todo.task}</p>
        </li>
    `;
}

export default listTemplate;