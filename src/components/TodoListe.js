import React from "react";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import axios from "axios";

function TodoListe() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);

  return (
    <div>
      {todos.map((todo) => {
        if (todo.id < 15) {
          return <TodoItem hichem={todo.title}></TodoItem>;
        }
      })}
    </div>
  );
}

export default TodoListe;
