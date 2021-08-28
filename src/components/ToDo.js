import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import Todos from "./ToDoList";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";

function ToDo({ todos, completeTodo, removeTodo,updatedTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

const onSubmitUpdate = value => {
    updatedTodo(edit.id, value)
    setEdit({ 
        id: null ,
        value: ''
    })
}

 if(edit.id){
     return <ToDoForm edit={edit} onSubmit={onSubmitUpdate} />
 }


  return todos.map((todo, index) => (
    <div
      className={todo.iscomplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <AiOutlineCloseCircle
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default ToDo;
