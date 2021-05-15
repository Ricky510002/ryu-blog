import styles from "./burger.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.burger} open={open} onClick={() => setOpen(!open)}>
        {open ? (
          <div className={styles.line1_a} />
        ) : (
          <div className={styles.line1_b} />
        )}
        {open ? (
          <div className={styles.line2_a} />
        ) : (
          <div className={styles.line2_b} />
        )}
        {open ? (
          <div className={styles.line3_a} />
        ) : (
          <div className={styles.line3_b} />
        )}
      </div>

      {open ? (
        <div className={styles.rightNav_open}>
          <ul className={styles.ul}>
            <Link href="/">
              <li className={styles.li}>Home</li>
            </Link>
            <Link href="/about">
              <li className={styles.li}>AboutMe</li>
            </Link>
            <Link href="/contact">
              <li className={styles.li}>Contact</li>
            </Link>
            <Link href="/travel">
              <li className={styles.li}>Travel</li>
            </Link>
          </ul>
        </div>
        ) : (
        <div className={styles.rightNav}>
          <ul className={styles.ul}>
            <Link href="/">
              <li className={styles.li}>Home</li>
            </Link>
            <Link href="/about">
              <li className={styles.li}>AboutMe</li>
            </Link>
            <Link href="/contact">
              <li className={styles.li}>Contact</li>
            </Link>
            <Link href="/travel">
              <li className={styles.li}>Travel</li>
            </Link>   
          </ul>
        </div>
        )}

      
    </>
  );
}
