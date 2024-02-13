const { createSlice } = require("@reduxjs/toolkit");

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    setDone: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});
export const { addTodo, deleteTodo, setDone } = todosSlice.actions;
export default todosSlice.reducer;
