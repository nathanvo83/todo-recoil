import React from "react";
import { todoListState } from "../state/todoListState";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoItemCreator />
      {console.log(todoList)}

      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;
