import styles from "./header.module.css"
import Burger from "./burger"
import Link from "next/link";




export default function Header(){
  return(
    <>
      <div className={styles.nav}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="/logo.png" alt="LOGO" className={styles.img}/>
          </div>
        </Link>
        
        <Burger/>
        
      </div>
      
    </>
  );
}