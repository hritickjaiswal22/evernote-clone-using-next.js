import Image from "next/image";

import styles from "../styles/Home.module.scss";

import Button from "../components/Button";
import logo from "../public/evernote-icon.svg";

export default function Home() {
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
        <Button color="green" />
      </article>
    </main>
  );
}
