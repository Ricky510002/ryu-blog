import Head from "next/head";
import styles from "../styles/about.module.css";

export default function about() {
  return (
    <div>
      <Head>
        <title>aboutページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.about}>aboutページです</div>
    </div>
  );
}
