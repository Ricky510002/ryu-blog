import styles from "./background.module.css";

export default function Background(props){
  return(
    <>
    <div className={styles.backgroundWrapper}>
      <div className={styles.background}>
        <div className={styles.text}>{props.title}</div>
      </div>

    </div>
    </>
  );
}