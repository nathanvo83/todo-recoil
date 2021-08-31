import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state/todoListState";
import { v4 } from "uuid";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addHandler = () => {
    setTodoList((currentTodoList) => [
      ...currentTodoList,
      {
        id: v4(),
        text: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={inputHandler} />
      &nbsp;<button onClick={addHandler}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
