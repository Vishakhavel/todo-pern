import React, { useState } from "react";
import { COMPLETE, PENDING } from "./constants";
import { nanoid } from "nanoid";
import { Button, Checkbox } from "antd";
import "./styles.css";
import { useSelector } from "react-redux";
import Button from "antd";
const Todo = () => {
  const [showAddTodo, setShowAddTodo] = useState(false);
  const todos = useSelector((state) => state.todos.value);
  let pendingTodos = todos.filter((curTodo) => curTodo.status === PENDING);
  let completedTodos = todos.filter((curTodo) => curTodo.status === COMPLETE);

  const handleDone = (e) => {
    console.log("checkbox checked?", e.target.checked);
  };

  const handleAddTodoClick = () => {
    setShowAddTodo(true);
  };

  return (
    <div className="container green">
      <h4>TODO LIST</h4>
      <div className="row">
        <div className="col-sm grey">
          <h4>PENDING LIST</h4>
          {pendingTodos.map((curTodo) => (
            <div className="list">
              <div className="todoText">{curTodo.textData}</div>
              <Button onClick={handleDone}>done</Button>
            </div>
          ))}
        </div>
        <div className="col-sm blue">
          <h4>COMPLETED LIST</h4>
          {completedTodos.map((curTodo) => (
            <div className="list">
              <div className="todoText">{curTodo.textData}</div>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={handleAddTodoClick}>Add todo</Button>
    </div>
  );
};

export default Todo;
