import Image from "next/image";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { login } from "../slices/authSlice";

import styles from "../styles/Home.module.scss";

import Button from "../components/Button";
import logo from "../public/evernote-icon.svg";

export default function Home() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const dispatch = useDispatch();

  const clickHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { uid, email, photoURL, displayName } = result.user;
        dispatch(login({ uid, email, photoURL, displayName }));
        router.push("/notes");
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
        <Button onClick={clickHandler} color="green" content="Continue" />
      </article>
    </main>
  );
}
