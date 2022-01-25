import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { getDatabase, ref, child, get, update } from "firebase/database";

import debounce from "../utilities/debounce";

import styles from "./Editor.module.scss";

function Editor() {
  const [body, setBody] = useState("");
  const { key, title } = useSelector((state) => state.messageState);
  const { uid } = useSelector((state) => state.authState);
  const dbRef = ref(getDatabase());
  console.log(useSelector((state) => state.messageState));

  useEffect(() => {
    if (key) {
      get(child(dbRef, `notes/${uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const obj = snapshot.val();
            setBody(obj[key].body);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setBody("");
    }
  }, [key]);

  const handleChange = (e) => {
    if (key) {
      const db = getDatabase();
      const note = {
        body: e,
        title,
        key,
      };
      const updates = {};
      updates["/notes/" + uid + "/" + key] = note;
      setBody(e);
      update(ref(db), updates);
    }
  };

  return (
    <article className={styles.textEditor}>
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={body}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </article>
  );
}

export default Editor;
