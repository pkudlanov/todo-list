import listTemplate from '../src/list-template.js';

const test = QUnit.test;

QUnit.module('list template');

test('list template for false', (assert) => {
    // arrange
    const todo = {
        task: 'Pack my stuff',
        completed: false
    };

    const expected = /*html*/`
        <li class="list-item">
            <p><input class="checkbox" type="checkbox">Pack my stuff</p>
        </li>
    `;

    // act
    const html = listTemplate(todo);

    // assert
    assert.htmlEqual(html, expected);
});