import React  from 'react';
import styles from './TaskList.module.css';
import TaskDetails from './TaskDetails';

const TaskList = (props) =>{

   
    return(
        <div className={styles.taskList}>
            
            {props.taskList.map((Task)=>{
                return <TaskDetails task= {Task.task} date={Task.date} time={Task.time}/>
            })}
        </div>
    )
}

export default TaskList;