import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component {
    state = {
        todos: [],
        filterTodo: 'all',
        toggleAllTodos: true
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
        this.setState((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        }));
    };

    removeAllCompleteTodos = () => {
        this.setState((state) => ({
            todos: state.todos.filter((todo) => !todo.complete)
        }));
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
                        key={todo.id}
                        onDelete={() => this.deleteTodo(todo.id)}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        todo={todo}
                    />
                ))}
                <div>todos left: {this.state.todos.filter((todo) => !todo.complete).length}</div>
                {this.state.todos.some((todo) => todo.complete) ? (
                    <div>
                        <button onClick={this.removeAllCompleteTodos}>remove all complete todos</button>
                    </div>
                ) : null}

                <div>
                    <button
                        onClick={() => {
                            this.setState((state) => ({
                                todos: state.todos.map((todo) => ({
                                    ...todo,
                                    complete: state.toggleAllTodos
                                })),
                                toggleAllTodos: !state.toggleAllTodos
                            }));
                        }}>
                        toggle all complete todos: {this.state.toggleAllTodos.toString()}
                    </button>
                </div>
            </div>
        );
    }
}
