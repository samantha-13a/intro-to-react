import React, { Component } from 'react';

class ToDo extends Component {
    deleteTodo() {
        this.props.deleteTodo(this.props.id)
    }

    render () {
        return (
            <li>
                <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
                <span>{ this.props.description }</span>
                <button id="todoDelete" type="button" onClick={() => { this.deleteTodo() }}>DELETE</button>
            </li>
        );
    }
}

export default ToDo;