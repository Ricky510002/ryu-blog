import styles from "./background.module.css";

export default function Background(props){
  return(
    <>
    <div className={styles.background}>
      <div className={styles.text}>Ryu Blog</div>
    </div>
    </>
  );
}