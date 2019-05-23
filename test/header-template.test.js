import headerTemplate from '../src/header-template.js';

const test = QUnit.test;
QUnit.module('header template');

test('header template', (assert) => {
    // Arrange
    const expected = /*html*/ `
    <header>
        <h1>Things To-Do to Get Home</h1>
    </header>
`;

    // Act
    const html = headerTemplate();

    // Assert
    assert.htmlEqual(html, expected);
});
