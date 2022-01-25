import React, { useState } from "react";
import { ref, getDatabase, set, push } from "firebase/database";
import { useSelector } from "react-redux";

import Button from "./Button";
import Notes from "./Notes";

import styles from "./SideBar.module.scss";

function SideBar() {
  const db = getDatabase();
  const { uid } = useSelector((state) => state.authState);
  const notesRef = ref(db, `notes/${uid}`);

  const [creatingNewNote, setCreatingNewNote] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");

  const newNoteButtonHandler = () => {
    setCreatingNewNote((prevState) => !prevState);
  };

  const submitHandler = () => {
    const newNotesRef = push(notesRef);
    const key = newNotesRef.key;

    if (noteTitle) {
      set(newNotesRef, {
        key: key,
        title: noteTitle,
        body: "",
      }).then(() => {
        setNoteTitle("");
        setCreatingNewNote((prevState) => !prevState);
      });
    }
  };

  return (
    <aside className={styles.sidebar}>
      <Button
        color="green"
        content="+ New Note"
        onClick={newNoteButtonHandler}
      />
      {creatingNewNote ? (
        <div className={styles.sidebar__inputSection}>
          <input
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className={styles.sidebar__input}
            placeholder="Note Title"
            type="text"
          />
          <Button content="Submit" color="green" onClick={submitHandler} />
        </div>
      ) : (
        ""
      )}
      <Notes />
    </aside>
  );
}

export default SideBar;
