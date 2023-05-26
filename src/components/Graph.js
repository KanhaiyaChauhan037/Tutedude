import React, { useState } from 'react';

function Graph() {
     const [todos, setTodos] = useState([]);
     const [newTodo, setNewTodo] = useState('');
     const [status, setStatus] = useState('');

     const handleInputChange = (e) => {
          setNewTodo(e.target.value);
     };

     const handleStatusChange = (e) => {
          setStatus(e.target.value);
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (newTodo.trim() === '') {
               return;
          }

          const todo = {
               id: new Date().getTime(),
               title: newTodo,
               completed: false,
          };

          setTodos([...todos, todo]);
          setNewTodo('');
     };

     const handleToggle = (id) => {
          const updatedTodos = todos.map((todo) => {
               if (todo.id === id) {
                    return {
                         ...todo,
                         completed: !todo.completed,
                    };
               }
               return todo;
          });

          setTodos(updatedTodos);
     };

     return (
          <div>
               <h1>Todo Graph</h1>
               <form onSubmit={handleSubmit}>
                    <input
                         type="text"
                         placeholder="Enter a new todo"
                         value={newTodo}
                         onChange={handleInputChange}
                    />
                    <select value={status} onChange={handleStatusChange}>
                         <option value="">All</option>
                         <option value="completed">Completed</option>
                         <option value="incomplete">Incomplete</option>
                    </select>
                    <button type="submit">Add Todo</button>
               </form>
               <ul>
                    {todos.map((todo) => (
                         <li
                              key={todo.id}
                              style={{
                                   textDecoration: todo.completed ? 'line-through' : 'none',
                              }}
                              onClick={() => handleToggle(todo.id)}
                         >
                              {todo.title}
                         </li>
                    ))}
               </ul>
          </div>
     );
}

export default Graph;
