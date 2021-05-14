import React from "react";
import styles from "./TaskInput.module.css";
import Button from '../buttons/Button';

const TaskInput = () => {
  return (
    <div className={styles.input}>
      <form>
        <input type="text"/>
        <Button type="submit" className={styles.addButton}>Add</Button>
      </form>
    </div>
  );
};

export default TaskInput;
