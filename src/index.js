import listTemplate from './list-template.js';
import htmlToDOM from './html-to-DOM.js';
import todo from './data.js';
import headerTemplate from './header-template.js';

const list = document.getElementById('todo-list');
const header = document.getElementById('header');

todo.forEach(listItem => {
    const html = listTemplate(listItem);

    const dom = htmlToDOM(html);

    list.appendChild(dom);
});

const html = headerTemplate();
const dom = htmlToDOM(html);
header.appendChild(dom);