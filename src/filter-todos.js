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
