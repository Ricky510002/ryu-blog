import styles from "./burger.module.css";
import { useState } from "react";

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
            <li className={styles.li}>Home</li>
            <li className={styles.li}>About</li>
            <li className={styles.li}>Contact</li>
            <li className={styles.li}>Travel</li>
          </ul>
        </div>
        ) : (
        <div className={styles.rightNav}>
          <ul className={styles.ul}>
            <li className={styles.li}>Home</li>
            <li className={styles.li}>About</li>
            <li className={styles.li}>Contact</li>
            <li className={styles.li}>Travel</li>
          </ul>
        </div>
        )}

      
    </>
  );
}
