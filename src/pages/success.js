import React from "react";
import Head from "next/head";

import styles from "../styles/success.module.css";
import Header from "../components/header";

const Success = () => {
  return (
    <div>
      <Head>
        <title>RyuBlog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.send}>
        送信に成功しました！ <br />
        お問い合わせありがとうございました
      </div>
    </div>
  );
};

export default Success;
