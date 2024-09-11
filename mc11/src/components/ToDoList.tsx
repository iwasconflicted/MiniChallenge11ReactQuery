import axios from "axios";
import { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  body: string;
}

const ToDoList = () => {
  //useState to help us hold state
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  //Lets create a fetch data function to help us fetch our data with axios
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