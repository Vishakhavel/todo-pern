import React from "react";
import "./styles.css";
const AddTodo = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onOutsideClick}></div>
      <div className="addTodomodal">
        <h4>Add Todo</h4>
        <div></div>
      </div>
    </div>
  );
};

export default AddTodo;
