import React from "react";
import { useSelector } from "react-redux";

import SideBar from "../components/SideBar";
import Editor from "../components/Editor";

import styles from "../styles/Notes.module.scss";

function notes() {
  return (
    <main className={styles.main}>
      <SideBar />
      <Editor />
    </main>
  );
}

export default notes;
