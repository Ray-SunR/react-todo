import React, { Component } from 'react';

class FilterTodo extends Component {
    render() {
        const {
            onClickFilterAll,
            onClickFilterIncompleted,
            onClickFilterCompleted
        } = this.props;
        return (
            <div>
                <button onClick={onClickFilterAll}>All</button>
                <button onClick={onClickFilterIncompleted}>Incompleted</button>
                <button onClick={onClickFilterCompleted}>Completed</button>
            </div>
        );
    }
}

export default FilterTodo;