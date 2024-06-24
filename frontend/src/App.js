import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/todos', { text: newTodo });
    setNewTodo('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h2>You have {todos.length} Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              {todo.text}
              <button onClick={() => deleteTodo(todo._id)}>×</button>
            </li>
          ))}
        </ul>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter Item"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;