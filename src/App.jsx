import './App.css';
import React from 'react';
import TodoApp from './components/TodoApp/TodoApp';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TodoApp/>
      </div>
    )
  }
}