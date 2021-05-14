import React from 'react';
import styles from './TaskDetails.module.css';
import Button from '../buttons/Button';

const TaskDetails = props =>{
    return(
        <table className={styles.taskDetails}>
            <tr>
                <td className={styles.task}>
                    <p>{props.task}</p>
                </td>
                <td className={styles.date}>
                    <p>{props.date}</p>
                </td>
                <td className={styles.time}>
                    <p>{props.time}</p>
                </td>
                <td className={styles.completeButton}>
                    <Button>Complete</Button>
                </td>
                <td className={styles.deleteButton}>
                    <Button>Delete</Button>
                </td>       
            </tr>
        </table>
    )
}

export default TaskDetails;