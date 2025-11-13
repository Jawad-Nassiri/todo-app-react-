import { Component } from "react";
import "./TodoApp.css";

class TodoApp extends Component {
  constructor() {
    super();

    this.state = {
      todoTitle: "",
      todos: [],
      todosFilter: "all",
    };

    this.todoTitleHandler = this.todoTitleHandler.bind(this);
    this.addTodoHandler = this.addTodoHandler.bind(this);
    this.checkTodoHandler = this.checkTodoHandler.bind(this);
    this.changeFilterHandler = this.changeFilterHandler.bind(this);
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
      return { todos: [...prev.todos, newTodo], todoTitle: "" };
    });
  }

  removeTodoHandler(todoId) {
    const allTodos = this.state.todos;
    const filteredTodos = allTodos.filter((todo) => todo.id !== todoId);

    this.setState({ todos: [...filteredTodos] });
  }

  checkTodoHandler(todoId) {
    this.setState((prev) => {
      const updatedTodos = prev.todos.map((todo) =>
        todo.id === todoId ? { ...todo, status: !todo.status } : todo
      );
      return { todos: updatedTodos };
    });
  }

  changeFilterHandler(event) {
    this.setState({ todosFilter: event.target.value });
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
          <select
            className="filter-select"
            onChange={this.changeFilterHandler}
            value={this.state.todosFilter}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
          </select>
        </div>

        <div className="todos-section">
          <h2 className="todos-title">Your Todos</h2>

          {this.state.todosFilter === "completed" &&
            this.state.todos
              .filter((todo) => todo.status === true)
              .map((todo) => (
                <div
                  className={`todo-item ${
                    todo.status === true ? "completed" : ""
                  }`}
                  key={todo.id}
                >
                  <span
                    className={`todo-text ${
                      todo.status === true ? "completed" : ""
                    }`}
                  >
                    {todo.title}
                  </span>
                  <div className="todo-buttons">
                    <button
                      className="check-btn"
                      onClick={() => this.checkTodoHandler(todo.id)}
                    >
                      ✓
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => this.removeTodoHandler(todo.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
          

          {this.state.todosFilter === "not-completed" &&
            this.state.todos
              .filter((todo) => todo.status === false)
              .map((todo) => (
                <div
                  className={`todo-item ${
                    todo.status === true ? "completed" : ""
                  }`}
                  key={todo.id}
                >
                  <span
                    className={`todo-text ${
                      todo.status === true ? "completed" : ""
                    }`}
                  >
                    {todo.title}
                  </span>
                  <div className="todo-buttons">
                    <button
                      className="check-btn"
                      onClick={() => this.checkTodoHandler(todo.id)}
                    >
                      ✓
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => this.removeTodoHandler(todo.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
          
          

          {this.state.todosFilter === "all" && this.state.todos.map((todo) => (
            <div
              className={`todo-item ${todo.status === true ? "completed" : ""}`}
              key={todo.id}
            >
              <span
                className={`todo-text ${
                  todo.status === true ? "completed" : ""
                }`}
              >
                {todo.title}
              </span>
              <div className="todo-buttons">
                <button
                  className="check-btn"
                  onClick={() => this.checkTodoHandler(todo.id)}
                >
                  ✓
                </button>
                <button
                  className="delete-btn"
                  onClick={() => this.removeTodoHandler(todo.id)}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoApp;
