import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {
    state = {
        todos: [],
        filterTodo: 'all'
    };

    addTodos = (todo) => {
        this.setState({
            todos: [ todo, ...this.state.todos ]
        });
    };

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        });
    };

    updateFilterTodo = (status) => {
        this.setState({
            filterTodo: status
        });
    };

    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id)
        });
    };

    render() {
        let todos = [];
        if (this.state.filterTodo === 'all') {
            todos = this.state.todos;
        } else if (this.state.filterTodo === 'active') {
            todos = this.state.todos.filter((todo) => !todo.complete);
        } else if (this.state.filterTodo === 'complete') {
            todos = this.state.todos.filter((todo) => todo.complete);
        }
        return (
            <div className="App">
                <TodoForm onSubmit={this.addTodos} />

                <button onClick={() => this.updateFilterTodo('all')}>all</button>
                <button onClick={() => this.updateFilterTodo('active')}>active</button>
                <button onClick={() => this.updateFilterTodo('complete')}>complete</button>
                {todos.map((todo) => (
                    <Todo
                        key={todo.key}
                        onDelete={() => this.deleteTodo(todo.id)}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        todo={todo}
                    />
                ))}
                <div>todos left: {this.state.todos.filter((todo) => !todo.complete).length}</div>
            </div>
        );
    }
}
