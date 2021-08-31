import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../state/todoListState";
import { removeItemAtIndex, replaceItemAtIndex } from "../common/listUtil";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const idx = todoList.findIndex((todoItem) => todoItem === item);

  const removeHandler = () => {
    const newList = removeItemAtIndex(todoList, idx);
    setTodoList(newList);
  };

  const statusHandler = () => {
    //
    const newItem = {
      ...item,
      isComplete: !item.isComplete,
    };

    const newList = replaceItemAtIndex(todoList, idx, newItem);

    setTodoList(newList);
  };

  return (
    <div className="item">
      {console.log("item ->", item)}
      <input type="checkbox" value={item.isComplete} onChange={statusHandler} />
      <button onClick={removeHandler}>&nbsp;X&nbsp;</button>
      &nbsp; {item.text}
    </div>
  );
};

export default TodoItem;
