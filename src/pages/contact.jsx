import Head from "next/head";
import styles from "../styles/contact.module.css";

export default function about() {
  return (
    <div>
      <Head>
        <title>contactページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.about}>contactページです</div>
    </div>
  );
}
