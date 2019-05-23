import TodoItem from '../src/components/TodoItem.js';

const test = QUnit.test;

QUnit.module('list item');

test('list item for false', (assert) => {
    // arrange
    const todo = {
        task: 'Pack my stuff',
        completed: false
    };

    const expected = /*html*/`
        <li class="list-item">
            <p>
                <input class="checkbox" type="checkbox">Pack my stuff
                <button class="remove-button">X</button>
            </p>
        </li>
    `;

    // act
    const todoItem = new TodoItem({ todo });
    const html = todoItem.renderTemplate();

    // assert
    assert.htmlEqual(html, expected);
});

test('list item for true', (assert) => {
    // arrange
    const todo = {
        task: 'Pack my stuff',
        completed: true
    };

    const expected = /*html*/`
        <li class="list-item">
            <p><input class="checkbox" type="checkbox" checked>Pack my stuff</p>
        </li>
    `;

    // act
    const todoItem = new TodoItem({ todo });
    const html = todoItem.renderTemplate();

    // assert
    assert.htmlEqual(html, expected);
});