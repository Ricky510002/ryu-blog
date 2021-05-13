import Head from "next/head";
import styles from "../styles/home.module.css";
import Link from "next/link";

import Header from "../components/header"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RyuBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ようこそ <a href="https://nextjs.org">Ryu blog!</a>
        </h1>
      </main>
      
      <Link href="/about">
        <a>aboutページ</a>
      </Link>
      <Link href="/contact">
        <a>contactページ</a>
      </Link>
      <Link href="/travel">
        <a>travelページ</a>
      </Link>

      
    </div>
  );
}
