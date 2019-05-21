import listTemplate from './list-template.js';
import htmlToDOM from './html-to-DOM.js';
import todo from './data.js';

const list = document.getElementById('todo-list');

todo.forEach(listItem => {
    const html = listTemplate(listItem);

    const dom = htmlToDOM(html);

    list.appendChild(dom);
});