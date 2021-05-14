import React  from 'react';
import styles from './TaskList.module.css';
import TaskDetails from './TaskDetails';

const TaskList = () =>{

   
    return(
        <div className={styles.taskList}>
            <TaskDetails/>
        </div>
    )
}

export default TaskList;