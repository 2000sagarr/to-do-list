import React from "react";
import styles from "./TaskList.module.css";
import TaskDetails from "./TaskDetails";

const TaskList = (props) => {
  return (
    <div className={styles.taskList}>
      {props.taskList.map((Task) => {
        return (
          <TaskDetails
            key={Task.key}
            task={Task.task}
            date={Task.date}
            time={Task.time}
            onDelete={props.onDeleteHandler}
            id = {Task.key}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
