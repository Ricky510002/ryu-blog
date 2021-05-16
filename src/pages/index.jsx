import Head from "next/head";
import styles from "../styles/home.module.css";
import Link from "next/link";

import Header from "../components/header";
import Background from "../components/background";
import Scroll from "../components/scroll";
import { Pagination } from '../components/Pagination';


export default function Home({ blog,totalCount }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>RyuBlog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Background title="Ryu Blog"/>

        <Scroll />

        <div className={styles.Episodes}>Episodes</div>

        <div className={styles.gridContainer}>
          {blog.map((blog) => (
            <Link href={`blog/${blog.id}`} key={blog.id}>
              <div className={styles.gridItem}>
                <div className={styles.l_wrapper_06}>
                  <div className={styles.card_06}>
                    <img
                      className={styles.card_img_06}
                      src={blog.img.url}
                      alt="ブログのサムネイル"
                    ></img>
                    <div className={styles.card_content_06}>
                      <p className={styles.card_title_06}>{blog.title}</p>
                      <p className={styles.card_text_06}>{blog.body1}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
          <Pagination totalCount={totalCount} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://ryu-blog.microcms.io/api/v1/blog?offset=0&limit=6", key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount
    },
  };
};
