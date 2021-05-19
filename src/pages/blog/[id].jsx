import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/blog.module.css";
import Header from "../../components/header";
import Background from "../../components/background";
import Burger from "../../components/burger";
import Scroll from "../../components/scroll";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FabFaGithub } from "@fortawesome/free-solid-svg-icons";

export default function BlogId({ blog }) {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="../logo.png" alt="LOGO" className={styles.img}/>
          </div>
        </Link>
        <Burger />
      </div>

      {/* <Header /> */}
      {/* <Background title="Ryu Blog" /> */}

      <Scroll />
      <div className={styles.blog}>Ryu Blog</div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h1 className={styles.h1}>{blog.title}</h1>
          <img src={blog.img.url} alt="" className={styles.thumbnail} />
          <div className={styles.tableOfContents}>
            <h3>目次</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.content}`,
              }}
            />
          </div>
          <div className={styles.box}>
            <h3>{blog.head1}</h3>
          </div>
          <div className={styles.body}>
            <div
              dangerouslySetInnerHTML={{
                __html: `${blog.body1}`,
              }}
            />
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.pf}>
            <img src="/IMG_profile.jpg" alt="" className={styles.profileImg} />
          </div>
          <div className={styles.name}>
            後藤瑠希<span className={styles.span}>Goto Ryuki</span>
          </div>
          <div className={styles.profileP}>
            20歳/埼玉県出身 <br />
            <br />
            エンジニアを目指す大学生
            <br />
            フロントエンド領域に特に興味があり、現在は主にTypeScript, React,
            Next.jsを学んでいます。
            <br />
          </div>
        </div>
        {/* <FontAwesomeIcon icon={FabFaGithub} size="lg" color="#fff" /> */}
      </div>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch("https://ryu-blog.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://ryu-blog.microcms.io/api/v1/blog/" + id,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
    },
  };
};
