import { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      todoTitle: "",
      todos: [],
      todosFilter: 'all'
    };

    this.todoTitleHandler = this.todoTitleHandler.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
  }

  todoTitleHandler(event) {
    this.setState({ todoTitle: event.target.value });
  }

  addTodoHandler() {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: this.state.todoTitle,
      status: false,
    };

    this.setState((prev) => {
      return { todos: [...prev.todos, newTodo],  todoTitle: ""};
    });

    }
    
    removeTodoHandler(todoId) {
        const allTodos = this.state.todos;
        const filteredTodos = allTodos.filter(todo => todo.id !== todoId)

        this.setState({todos: [...filteredTodos]})
    }

  render() {
    return (
      <div className="todo-app">
        <div className="input-section">
          <input
            type="text"
            className="todo-input"
            placeholder="Enter todo title..."
            value={this.state.todoTitle}
            onChange={this.todoTitleHandler}
          />
          <button className="add-btn" onClick={this.addTodoHandler}>
            Add Todo
          </button>
          <select className="filter-select">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
          </select>
        </div>

        <div className="todos-section">
          <h2 className="todos-title">Your Todos</h2>

          {this.state.todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <span className="todo-text">{todo.title}</span>
              <div className="todo-buttons">
                <button className="check-btn">✓</button>
                      <button className="delete-btn" onClick={() => this.removeTodoHandler(todo.id)}>✕</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoApp;
