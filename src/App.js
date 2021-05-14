import React, { useState } from "react";
import "./App.css";
import Title from "./components/titles/Title";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/taskList/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (tTask, tDate, tTime) => {
    setTaskList((prevTaskList) => {
      return [...prevTaskList, { task: tTask, date: tDate, time: tTime }];
    });
  };
  return (
    <div className="App">
      <Title>To do list</Title>
      <TaskInput onAddTask ={addTaskHandler}/>
      <TaskList taskList={taskList}/>
    </div>
  );
}

export default App;
