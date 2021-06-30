import Head from "next/head";
import styles from "../styles/about.module.css";
import Header from "../components/header";
import Background from "../components/background";
import Scroll from "../components/scroll";

export default function about() {
  return (
    <>
      <Head>
        <title>Ryublog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Background title="About Me" />
      <Scroll />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.h1}>Profile</h1>
          <p className={styles.name}>
            後藤瑠希<span className={styles.span}>Goto Ryuki</span>
          </p>
          <p>
            20歳/埼玉県出身
            <br />
            東京理科大学 2年
            <br />
            <br />
            エンジニアを目指す大学生
            <br />
            フロントエンド領域に特に興味があり、現在は主にTypeScript, React,
            Next.jsを学習しています。
            <br />
            <br />
            [技術経験]
            <br />
            言語：JavaScript,PHP, Python(スクレイピング)
            <br />
            フレームワーク・ライブラリ等： React, Next.js, Laravel,
            Vue.js, Vuetify, bootstrap <br />
            データベース：MySQL <br />
            プロジェクト管理：Asana <br />
            その他技術：Firebase, Git, Linux, firebase,Docker, stripe, Wordpress,
            Octoparse, GAS
            <br />
            <br />
            [趣味]
            <br />
            海外旅行, 筋トレ, バスケ, スノボ, プログラミング
            <br />
          </p>
        </div>
        <img
          src="/5FB5DA4D-06A4-45EF-8E01-01195B97DACF-removebg-preview.png"
          alt=""
          className={styles.img}
        />
      </div>

      <div className={styles.bg1}>
        <div className={styles.text}>Portfolio</div>
      </div>

      <div className={styles.containerBook}>
        <div className={styles.cardBook1}>
          <h1 className={styles.h1}>Book Match</h1>
          <img
            src="/Bookmatch.jpg"
            alt="ポートフォリオのサムネイル"
            className={styles.imgBookMatch}
          />
        </div>
        <div className={styles.cardBook2}>
          <p className={styles.portfolio_p}>
            BookMatchとは大学で使わなくなった教科書を売りたい人と大学の高い教科書を少しでも安く買いたい人を結びつけるサービスです。
            <br />
            ターゲットを大学生にすることで他のフリマアプリなどと差別化をして大学生に使いやすいサービスとなっております。
            <br />
            <br />
            [ Why ]<br />
            このサービスを作った理由
            <br />
            大学生の時に大学の教科書の値段が高い、講義が終わると買った教科書がいらなくなり捨ててしまう、講義を受ける前に少しでもその教科書のことや教授のことが知りたいという問題があると思い、それらの問題を少しでも解決できるようにこのサービスを作りました。
            <br />
            <br />
            [ BookMatchの主な機能 ]<br />
            新規登録・ログイン機能
            <br />
            出品機能、検索機能
            <br />
            メッセージ機能
            <br />
            決済機能(Stripe)
            <br />
            <br />
            [使用技術] <br />
            PHP 7.4, Laravel 6.20.9, Docker, MySQL 5.7, Vue.js, Vuetify,
            Bootstrap, Stripe <br />
          </p>
        </div>
      </div>
      <div className={styles.containerBook}>
        <div className={styles.cardBook1}>
          <h1 className={styles.h1}>Todo List</h1>
          <img
            src="/スクリーンショット 2021-05-31 9.55.47-min.jpg"
            alt="ポートフォリオのサムネイル"
            className={styles.imgBookMatch}
          />
        </div>
        <div className={styles.cardBook2}>
          <p className={styles.portfolio_p}>
            シンプルな機能だけのTodoリストが欲しかったのでGoogleアカウントで簡単にログインしてすぐに使えるTodoリストを作ってみました！
            <br />
            [ 使用技術 ]<br />
            言語・・・JavaScript
            <br />
            ライブラリ・フレームワーク・・・React
            <br />
            ログイン・・・firebase(Auth)
            <br />
            データベース・・・firestore
            <br />
            デプロイ先・・・firebase
            <br />
          </p>
        </div>
      </div>

      <div className={styles.bg2}>
        <div className={styles.text}>
          About <br /> Ryu Blog
        </div>
      </div>

      <div className={styles.containerBook}>
        <div className={styles.cardBook1}>
          <h1 className={styles.h1}>Ryu Blog</h1>
          <img
            src="/スクリーンショット 2021-05-19 12.25.28.png"
            alt="ブログのサムネイル"
            className={styles.imgBookMatch}
          />
        </div>
        <div className={styles.cardBook2}>
          <p className={styles.ryublogContents}>
            Next.js、Reactを使って何か作ってみたくてこのブログを作りました。
            <br />
            <br />
            [ 使用技術 ]<br />
            言語・・・JavaScript
            <br />
            ライブラリ・フレームワーク・・・React, Next.js
            <br />
            ヘッドレスCMS・・・microCMS
            <br />
            デプロイ先・・・Vercel
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
