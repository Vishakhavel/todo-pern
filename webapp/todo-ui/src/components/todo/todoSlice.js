import { createSlice } from "@reduxjs/toolkit";
import { PENDING } from "./constants";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      { id: 1, textData: "Clean room", status: PENDING },
      { id: 2, textData: "do laundry", status: PENDING },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value += action.payload;
    },
    deleteTodo: (state, action) => {
      state.value.filter((curTodo) =>
        curTodo.id === action.payload ? null : curTodo
      );
      // having doubts about the working of returning null. check later if any busg come off
    },
    changeTodoStatus: (state, action) => {
      state.value.filter((curTodo) =>
        curTodo.id === action.payload.id
          ? (curTodo.status = action.payload.status)
          : curTodo
      );
      // having doubts about the working of returning null. check later if any busg come off
    },
  },
});

export const { changeTodoStatus, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
