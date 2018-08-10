import { connect } from 'react-redux';
import FilterTodo from '../components/FilterTodo';
import { filterAll, filterIncompleted, filterCompleted } from '../actions';

export default connect(null, (dispatch) => ({
    onClickFilterAll: () => dispatch(filterAll()),
    onClickFilterIncompleted: () => dispatch(filterIncompleted()),
    onClickFilterCompleted: () => dispatch(filterCompleted())
}))(FilterTodo);
