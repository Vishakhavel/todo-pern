import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { COMPLETED, PENDING, DELETED } from "./constants";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoData: [
      { id: "1", textData: "Clean room", status: PENDING },
      { id: "2", textData: "do laundry", status: PENDING },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.todoData = [
        ...state.todoData,
        {
          id: action.payload.id,
          textData: action.payload.textData,
          status: PENDING,
        },
      ];
    },
    deleteTodo: (state, action) => {
      console.log("from inside the delete", action);
      console.log("action.payload", action.payload);
      // state = state.todoData.filter((curTodo) => curTodo.id != action.payload);
      state.todoData.map((curTodo) => {
        if (curTodo.id === action.payload) {
          // CHANGING STATUS TO DELETED FOR NOW. CHECK WHY YOURE NOT ABLE TO DELETE THE VALUE ITSELF!!
          curTodo.status = DELETED;
        }
      });
      // state.todoData = [{ id: 1, textData: "Clean room", status: PENDING }];
    },
    changeTodoStatus: (state, action) => {
      console.log(action);
      // state.todoData.filter((curTodo) =>
      //   curTodo.id === action.payload ? (curTodo.status = COMPLETE) : curTodo
      // );
      state.todoData.map((curTodo) => {
        if (curTodo.id === action.payload) {
          curTodo.status = COMPLETED;
        }
      });
    },
  },
});

export const { changeTodoStatus, addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
