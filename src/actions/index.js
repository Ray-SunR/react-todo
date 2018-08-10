let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const clickTodo = todo => ({
    type: 'CLICK_TODO',
    todo
});

export const filterAll = () => ({
    type: 'FILTER_ALL'
});

export const filterIncompleted = () => ({
    type: 'FILTER_INCOMPLETED'
});

export const filterCompleted = () => ({
    type: 'FILTER_COMPLETED'
});