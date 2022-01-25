import React from "react";

import styles from "./Button.module.scss";

function Button({ color, onClick, content }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[`btn--${color}`]}`}
    >
      {content}
    </button>
  );
}

export default Button;
