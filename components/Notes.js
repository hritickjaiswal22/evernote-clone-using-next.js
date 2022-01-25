import React, { useEffect, useState } from "react";
import { ref, onValue, getDatabase } from "firebase/database";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

import styles from "./Notes.module.scss";
import deleteIcon from "../public/deleteIcon.png";
import { selectMessage } from "../slices/messageSlice";

function Notes() {
  const database = getDatabase();
  const { uid } = useSelector((state) => state.authState);
  const notesRef = ref(database, `notes/${uid}`);
  const [notes, setNotes] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    onValue(notesRef, (snap) => setNotes(snap.val()));
  }, []);

  const clickHandler = (e) => {
    dispatch(
      selectMessage({ key: e.target.dataset.key, title: e.target.innerText })
    );
  };

  return (
    <section className={styles.notesContainer}>
      {notes ? (
        Object.values(notes).map((note) => {
          const { key, title } = note;
          return (
            <div
              onClick={clickHandler}
              className={styles.note}
              data-key={key}
              key={key}
            >
              <p className={styles.note__title}>{title}</p>
            </div>
          );
        })
      ) : (
        <h1 className={styles.emptyHeading}>No Notes..</h1>
      )}
    </section>
  );
}

export default Notes;
