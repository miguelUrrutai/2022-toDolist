import React from "react";
import CheckBox from "./CheckBox";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
const Container = () => {
  return (
    <div>
      container!
      <FormTodo />
      <TaskList />
      <CheckBox />
    </div>
  );
};

export default Container;
