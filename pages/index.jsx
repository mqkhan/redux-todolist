import { addTodo } from "@/redux/todosSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import List from "./List";
let nextId = 0;
export default function Home() {
  const dispatch = useDispatch();
  const [todos, setTodos] = useState("");

  function handleChange(e) {
    setTodos(e.target.value);
  }
  function handleAddTodo() {
    dispatch(
      addTodo({
        id: nextId++,
        title: todos,
        done: false,
      })
    );
    setTodos("");
  }
  return (
    <>
      <div className="container">
        <div className="list bg-gray-200">
          <h1>Redux Todo List</h1>
          <input
            className="mr-1"
            placeholder="Add todo list"
            value={todos}
            onChange={handleChange}
          />
          <button onClick={handleAddTodo}>Add</button>
          <List />
        </div>
      </div>
    </>
  );
}
