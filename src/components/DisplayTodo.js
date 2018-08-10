
import React, { Component } from 'react';
import Todo from './Todo';

class DisplayTodo extends Component {
    render() {
        const {
            todos,
            onClick
        } = this.props;

        return (
            <ul>
                {todos.map(todo => 
                    <Todo key={todo.id} {...todo} onClick={() => onClick(todo)}/>)}
            </ul>
        );
    }
}

export default DisplayTodo;