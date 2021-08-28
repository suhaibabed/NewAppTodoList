import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const updatedTodo = (todoId, newValue)=>{
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );

  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };




  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.iscomplete = !todo.iscomplete;
      }
      return todos;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>what's the Plan for today?</h1>
      <ToDoForm onSubmit={addTodo} />
      <ToDo todos={todos} completeTodo={completeTodo} 
      removeTodo={removeTodo} 
      updatedTodo={updatedTodo}
      />
    </div>
  );
}

export default ToDoList;
