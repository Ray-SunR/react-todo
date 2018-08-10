const todos = (todos = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...todos,
                {
                    text: action.text,
                    id: action.id,
                    completed: false
                }
            ]
        case 'CLICK_TODO':
            return todos.map(todo => todo.id === action.todo.id ? { ...todo, completed: !todo.completed} : todo )
        default:
            return todos;
    }
};
export default todos;