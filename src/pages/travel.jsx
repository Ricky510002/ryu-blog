import Head from "next/head";
import styles from "../styles/travel.module.css";

export default function about() {
  return (
    <div>
      <Head>
        <title>travelページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.about}>travelページです</div>
    </div>
  );
}
