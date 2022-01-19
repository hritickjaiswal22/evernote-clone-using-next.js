import Image from "next/image";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import styles from "../styles/Home.module.scss";

import Button from "../components/Button";
import logo from "../public/evernote-icon.svg";

export default function Home() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const clickHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { uid, email, photoURL, displayName } = result.user;
        console.log(uid, email, photoURL, displayName);
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <div className={styles.container__imageBox}>
          <Image
            src={logo}
            objectFit="fill"
            className={styles.container__image}
          ></Image>
        </div>
        <h1 className={styles.container__title}>Evernote</h1>
        <h2 className={styles.container__tagline}>
          Remember everything important.
        </h2>
        <Button onClick={clickHandler} color="green" />
      </article>
    </main>
  );
}
