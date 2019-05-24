function filterTodos(todos, purifier) {
    const textPurifier = purifier.text.toLowerCase();
    return todos.filter(todo => {
        const todoTask = todo.task.toLowerCase();

        const hasText = !textPurifier || todoTask.includes(textPurifier);
        const hasCondition = purifier.condition > 0 || !purifier.condition === todo.completed;
        
        return hasText && hasCondition;
    });
}

export default filterTodos;

// //tasks
// task: 'jakl;sdfjkl',
// completed: false //or true

// purifier
// text: 'ajkld;fs',
// condition: 1 // 1:all, 0:completed, -1:notDone
