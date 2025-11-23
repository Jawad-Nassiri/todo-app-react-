import { useState } from "react";
import "./TodoApp.css";

export default function TodoApp() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [todosFilter, setTodosFilter] = useState("all");

  function addTodoHandler() {
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      status: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodoTitle("");
  }

  function getTodoTitle(event) {
    setTodoTitle(event.target.value);
  }

  function checkTodoHandler(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  }

  function removeTodoHandler(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function changeFilterHandler(event) {
    setTodosFilter(event.target.value);
  }

  return (
    <div className="todo-app">
      <div className="input-section">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter todo title..."
          value={todoTitle}
          onChange={getTodoTitle}
        />
        <button className="add-btn" onClick={addTodoHandler}>
          Add Todo
        </button>
        <select className="filter-select" onChange={changeFilterHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not-completed">Not Completed</option>
        </select>
      </div>

      <div className="todos-section">
        <h2 className="todos-title">Your Todos</h2>

        {todosFilter === "completed" &&
          todos
            .filter((todo) => todo.status === true)
            .map((todo) => (
              <div
                className={`todo-item ${
                  todo.status === true ? "completed" : ""
                }`}
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
                    onClick={() => checkTodoHandler(todo.id)}
                  >
                    ✓
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => removeTodoHandler(todo.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

        {todosFilter === "not-completed" &&
          todos
            .filter((todo) => todo.status === false)
            .map((todo) => (
              <div
                className={`todo-item ${
                  todo.status === true ? "completed" : ""
                }`}
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
                    onClick={() => checkTodoHandler(todo.id)}
                  >
                    ✓
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => removeTodoHandler(todo.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

        {todosFilter === "all" &&
          todos.map((todo) => (
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
                  onClick={() => checkTodoHandler(todo.id)}
                >
                  ✓
                </button>
                <button
                  className="delete-btn"
                  onClick={() => removeTodoHandler(todo.id)}
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
