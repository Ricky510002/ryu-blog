import Head from "next/head";
import styles from "../styles/travel.module.css";
import Header from "../components/header"
import Background from "../components/background"
import Scroll from "../components/scroll"
import Grid from "../components/grid"


export default function travel() {
  return (
    <>
      <Head>
        <title>Ryu blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      <Background title="Travel"/>
      <Scroll />
      <div className={styles.title}>Photos</div>

      <Grid/>
      
    </>
  );
}
