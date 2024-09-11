import axios from "axios";
import { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  body: string;
}

const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setTodos(res.data))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.body}</li>
      ))}
    </>
  );
};

export default ToDoList;