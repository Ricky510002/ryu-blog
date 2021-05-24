// pages/blog/page/[id].js
import Link from "next/link";
import { Pagination } from "../../../components/pagination";
import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import Header from "../../../components/header";
import Background from "../../../components/background";
import Scroll from "../../../components/scroll";

const PER_PAGE = 5;

export default function BlogPageId({ blog, totalCount }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>RyuBlog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Background title="Ryu Blog" />

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
                      <p className={styles.category}>
                        {blog.category && `${blog.category.name}`}
                      </p>
                      <p className={styles.card_title_06}>{blog.title}</p>
                      <div
                        className={styles.card_text_06}
                        dangerouslySetInnerHTML={{
                          __html: `${blog.lead}`,
                        }}
                      />
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

// 動的なページを作成
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const res = await fetch("https://ryu-blog.microcms.io/api/v1/blog", key);

  const repos = await res.json();

  const pageNumbers = [];

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };

  const data = await fetch(
    `https://ryu-blog.microcms.io/api/v1/blog?offset=${(id - 1) * 5}&limit=6`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
    },
  };
};
