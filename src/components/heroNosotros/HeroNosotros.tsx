import styles from "./heroNosotros.module.css";
export default function HeroNosotros() {
  return (
    <div id="hero" className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            SOBRE <br /> NOSOTROS.
          </h1>
        </div>
      </div>
    </div>
  );
}
