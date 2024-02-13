import { deleteTodo, setDone } from "@/redux/todosSlice";
import { useDispatch, useSelector } from "react-redux";

export default function List() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleDone(id) {
    dispatch(setDone(id));
  }

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }
  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "" }}
          >
            {todo.title}
            <button className="mx-1" onClick={() => handleDone(todo.id)}>
              Done
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
