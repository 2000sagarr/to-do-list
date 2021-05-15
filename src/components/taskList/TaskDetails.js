import React from 'react';
import styles from './TaskDetails.module.css';
import Button from '../buttons/Button';

const TaskDetails = props =>{
    const taskDeleteHandler = () =>{
        props.onDelete(props.id)
    }
    return(
            <ul className={styles.taskDetails}>
                <li className={styles.task}>
                    <p>{props.task}</p>
                </li>
                <li className={styles.date}>
                    <p>{props.date}</p>
                </li>
                <li className={styles.time}>
                    <p>{props.time}</p>
                </li>
                <li className={styles.completeButton}>
                    <Button>Complete</Button>
                </li>
                <li className={styles.deleteButton}>
                    <Button onClick={taskDeleteHandler}>Delete</Button>
                </li>       
            </ul>
        )
}

export default TaskDetails;