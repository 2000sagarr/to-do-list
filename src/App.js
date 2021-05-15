import React, { useState } from "react";
import "./App.css";
import Title from "./components/titles/Title";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/taskList/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (tTask, tDate, tTime) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList];
      updatedTaskList.unshift({task: tTask, date: tDate, time: tTime , key : Math.random().toString()})
      return updatedTaskList;
    });
  };

  const onDeleteTaskHandler = (key) =>{
    setTaskList(prevTaskList =>{
      const updatedTaskList = prevTaskList.filter((task) => key !== task.key);
      return updatedTaskList;
    })
  }

  return (
    <div className="App">
      <Title>To do list</Title>
      <TaskInput onAddTask ={addTaskHandler}/>
      <TaskList taskList={taskList} onDeleteHandler = {onDeleteTaskHandler}/>
    </div>
  );
}

export default App;
