import React from 'react';
import styles from './Title.module.css';        

const Title = (props) =>{
    return(
        <div className={`${styles.title} ${props.classname}`}>
            <h2>{props.children}</h2>
        </div>
    )
}

export default Title;