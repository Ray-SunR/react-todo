import React, { Component } from 'react';
import AddTodoButton from './AddTodoButton';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.input = null;
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    this.props.addTodo(this.input.value, e);
                    this.input.value = "";
                }}>
                    <input ref={node => (this.input = node)} />
                    <AddTodoButton/>
                </form>
            </div>
         );
    }
}

export default AddTodo;