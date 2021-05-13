import styles from "./header.module.css"
import Burger from "./burger"




export default function Header(){
  return(
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>
          LOGO
        </div>
        <Burger/>
        
      </div>
      
    </>
  );
}