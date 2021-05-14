import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={`${styles.input} ${props.className}`}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
