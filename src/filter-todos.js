function filterTodos(todos, purifier) {
    const textPurifier = purifier.text.toLowerCase();
    return todos.filter(todo => {
        const todoTask = todo.task.toLowerCase();

        const hasText = !textPurifier || todoTask.includes(textPurifier);
        const hasCondition = !purifier.condition || todo.condition === purifier.condition;
        
        return hasText && hasCondition;
    });
}

export default filterTodos;