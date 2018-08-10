import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { addTodo } from "../actions";
const { spawn } = require('child_process');

export default connect(
    null,
    (dispatch) => (
        {
            addTodo: (text, e) => {
                e.preventDefault();
                const ls = spawn('ls', ['-lh', '/usr']);
                console.log(ls);
                dispatch(addTodo(text));
            }
        }
    )
)(AddTodo);