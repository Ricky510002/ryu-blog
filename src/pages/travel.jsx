import Head from "next/head";
import styles from "../styles/travel.module.css";
import Header from "../components/header"
import Background from "../components/background"
import Scroll from "../components/scroll"


export default function about() {
  return (
    <>
      <Head>
        <title>travelページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <Background title="Travel"/>
      <Scroll />
      
      <div className={styles.about}>travelページです</div>
    </>
  );
}
