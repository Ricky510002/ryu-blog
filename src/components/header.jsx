import styles from "./header.module.css"
import Burger from "./burger"
import Link from "next/link";




export default function Header(){
  return(
    <>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="150511 (1).png" alt="ロゴ" className={styles.img}/>
          </div>
        </Link>
        
        <Burger/>
        
      </div>
      
    </>
  );
}