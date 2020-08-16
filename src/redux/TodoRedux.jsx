import React from 'react';
import { connect } from 'react-redux';
import TodoInput from './TodoInput'

class TodoRedux extends React.Component {
    render() {
        return <div>
            Todo
            <TodoInput></TodoInput>
            <ul>
                {this.props.todos.map((li, i) => <li >{li}</li>)}
            </ul>
        </div>
    }
}

const mapState = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapState)(TodoRedux);