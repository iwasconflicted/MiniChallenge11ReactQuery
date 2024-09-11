import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ToDo{
    id: number
    title: string
    body: string;
}

const useToDos = () =>
{
    const fetchTodos = () =>
        axios
        .get<ToDo[]>("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data)



    return useQuery<ToDo[],Error> ({
            queryKey: ["todos"],
            queryFn: fetchTodos
          })

}

export default useToDos;