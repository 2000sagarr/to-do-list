import React, { useState } from "react";
import styles from "./TaskInput.module.css";
import Button from "../buttons/Button";
import Input from "../UI/Input";

const TaskInput = (props) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const taskChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setTask(event.target.value.trim());
    }
  };

  const dateChangeHandler = (event) => {
    if (event.target.value) {
      setDate(event.target.value);
    }
  };

  const timeChangeHandler = (event) => {
    if (event.target.value) {
      setTime(event.target.value);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddTask(task, date, time);
    setTask("");
    setDate("");
    setTime("");
  };

  return (
    <div className={styles.input}>
      <form onSubmit={formSubmitHandler}>
        <Input
          type="text"
          placeholder="Enter task"
          onChange={taskChangeHandler}
          value={task}
        />
        <Input type="date" onChange={dateChangeHandler} value={date}/>
        <Input type="time" onChange={timeChangeHandler} value={time}/>
        <Button type="submit" className={styles.addButton}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default TaskInput;
