import React from "react";

import styles from "./Button.module.scss";

function Button({ color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[`btn--${color}`]}`}
    >
      Continue
    </button>
  );
}

export default Button;
