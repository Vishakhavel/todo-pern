import React, { useState } from "react";
import { COMPLETED, PENDING } from "./constants";
import { nanoid } from "nanoid";
import { Button, Checkbox } from "antd";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTodoStatus, deleteTodo, addTodo } from "./todoSlice";
import AddTodo from "./AddTodo";

const Todo = () => {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const todos = useSelector((state) => state.todos.todoData);
  let pendingTodos = todos.filter((curTodo) => curTodo.status === PENDING);
  let completedTodos = todos.filter((curTodo) => curTodo.status === COMPLETED);

  const dispatch = useDispatch();

  const handleDeleteButton = (curTodoID) => {
    dispatch(deleteTodo(curTodoID));
  };

  const handleDoneButton = (curTodoID) => {
    // console.log("checkbox checked?", e.target.checked);
    dispatch(changeTodoStatus(curTodoID));
  };

  const handleAddTodoClick = () => {
    setShowAddTodo(true);
  };

  const handleOutsideClick = () => {
    setShowAddTodo(false);
  };
  return (
    <div>
      {showAddTodo && <AddTodo onOutsideClick={handleOutsideClick} />}
      <div className="container green">
        <h4>TODO LIST</h4>
        <div className="row">
          <div className="col-sm grey">
            <h4>PENDING LIST</h4>
            {pendingTodos.map((curTodo) => (
              <div className="list">
                <div className="todoText">{curTodo.textData}</div>
                <Button
                  onClick={() => {
                    //   console.log(curTodo.id);
                    handleDoneButton(curTodo.id);
                  }}
                >
                  done
                </Button>
              </div>
            ))}
          </div>
          <div className="col-sm blue">
            <h4>COMPLETED LIST</h4>
            {completedTodos.map((curTodo) => (
              <div className="list">
                <div className="todoText">{curTodo.textData}</div>
                <Button onClick={() => handleDeleteButton(curTodo.id)}>
                  delete
                </Button>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={handleAddTodoClick}>Add todo</Button>
      </div>
    </div>
  );
};

export default Todo;
