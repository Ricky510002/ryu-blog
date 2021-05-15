import styles from './pagination.module.css'
import Link from 'next/link';

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5;

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <div className={styles.ul}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <div key={index} className={styles.li}>
          <Link href={ `/blog/page/${number}`}>
            <a className={styles.a}>{number}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};