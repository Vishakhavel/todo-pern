import { Button, Input } from "antd";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./styles.css";
import { addTodo } from "./todoSlice";

const AddTodo = (props) => {
  const [val, setVal] = useState("");
  return (
    <div>
      <div className="backdrop" onClick={props.onOutsideClick}></div>
      <div className="addTodomodal">
        <h4>Add Todo</h4>
        <div>
          <Input
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
            type="text"
          />
          <Button
            onClick={() => {
              props.dispatch(addTodo({ textData: val, id: nanoid() }));
              setVal("");
              props.onOutsideClick();
            }}
          >
            add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
