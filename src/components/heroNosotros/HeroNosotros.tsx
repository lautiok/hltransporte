import styles from "./heroNosotros.module.css";
export default function HeroNosotros({
  arriba,
  abajo,
}: {
  arriba: string;
  abajo: string;
}) {
  return (
    <div id="hero" className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            {arriba} <br /> {abajo}.
          </h1>
        </div>
      </div>
    </div>
  );
}
