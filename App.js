import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, description: 'Walk the cat', isCompleted: true },
        { id: 2, description: 'Throw the dishes away', isCompleted: false },
        { id: 3, description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };

    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(id) {
    const filteredTodo = this.state.todos.filter(todo => id !== todo.id);

    this.setState({
      todos: filteredTodo,
    });
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos [index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo deleteTodo={this.deleteTodo} key={ index } description={ todo.description } id={ todo.id } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange (e) } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
