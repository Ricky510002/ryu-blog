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
        {/* <h1 className={styles.title}>
          ようこそ <a href="https://nextjs.org">Ryu blog!</a>
        </h1> */}
      </main>

      <div className={styles.gridContainer}>
        <div className={styles.gridItemA}>
          <div class={styles.l_wrapper_06}>
            <div class={styles.card_06}>
              <img class={styles.card_img_06} src="https://dubdesign.net/wp-content/uploads/2020/05/0508_dtplayouteyecatch.jpg" alt=""></img>
              <div class={styles.card_content_06}>
                <p class={styles.card_title_06}>DUB DESiGN</p>
                <p class={styles.card_text_06}>WebデザインやWebサイト制作、最新のWeb業界情報などを紹介していくサイト。<br></br>しっかりきっかり更新中。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
