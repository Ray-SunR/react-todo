import { connect } from 'react-redux';
import DisplayTodo from '../components/DisplayTodo';
import { clickTodo } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'FILTER_INCOMPLETED':
            return todos.filter(todo => !todo.completed);
        case 'FILTER_COMPLETED':
            return todos.filter(todo => todo.completed);
        case 'FILTER_ALL':
        default:
            return todos;
    } 
}

export default connect(
    (state) => ({
        todos: getVisibleTodos(state.todos, state.filter)
    }),
    (dispatch) => ({
        onClick: (todo) => dispatch(clickTodo(todo))
    })
)(DisplayTodo);