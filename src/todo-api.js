const todoApi = {
    storage: localStorage,
    saveAll(todos) {
        const json = JSON.stringify(todos);
        todoApi.storage.setItem('todos', json);
    },
    getAll() {
        const json = todoApi.storage.getItem('todos');
        let todos = JSON.parse(json);
        if(!todos){
            todos = [];
        }
        return todos;
    }
};

export default todoApi;