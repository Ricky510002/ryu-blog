import Head from "next/head";
import styles from "../styles/contact.module.css";
import Header from "../components/header"
import Background from "../components/background"
import Scroll from "../components/scroll"


export default function contact() {
  
  return (
    <>
      <Head>
        <title>contactページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Background title="contact" />
      <Scroll/>
    
      <div className={styles.about}>contactページです</div>

    
    </>
  );
}
