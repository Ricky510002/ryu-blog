import Head from "next/head";
import styles from "../styles/about.module.css";
import Header from "../components/header"
import Background from "../components/background";
import Scroll from "../components/scroll";



export default function about() {
  return (
    <>
      <Head>
        <title>aboutページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <Background title="About Me"/>
      <Scroll />


      <div className={styles.about}>aboutページです</div>
    </>
  );
}
