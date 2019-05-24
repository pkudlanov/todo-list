import filterTodos from '../src/filter-todos.js';

const test = QUnit.test;

QUnit.module('filter todos');

const todos = [
    {
        task: 'Go to the end',
        completed: false
    },
    {
        task: 'Make another left turn',
        completed: false
    },
    {
        task: 'Then the first right turn',
        completed: false
    },
    {
        task: 'The house is the second on the left',
        completed: false
    }
];

test('filters on task text', assert => {
    const filter = { text: 'house' };

    const filtered = filterTodos(todos, filter);

    assert.deepEqual(filtered, [{
        task: 'The house is the second on the left',
        completed: false
    }]);
});

test('filters on task text, case insensitive', assert => {
    const filter = { text: 'HoUSE' };
    
    const filtered = filterTodos(todos, filter);
    
    assert.deepEqual(filtered, [{
        task: 'The house is the second on the left',
        completed: false
    }]);
});

test('return all if no filter', assert => {
    const filter = {
        text: '',
        condition: 1
    };

    const filtered = filterTodos(todos, filter);

    assert.deepEqual(filtered, todos);
});