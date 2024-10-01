/* eslint-disable @next/next/no-img-element */
import styles from "./clientes.module.css";

export default function Clientes() {
  return (
    <section id="clientes" className={styles.clientes}>
      <h2>Clientes</h2>

      <div className={styles.galery}>
        <div className={styles.galeryImg}>
          <img src="/cliente-uno.webp" alt="mendoza" />
        </div>
        <div className={styles.galeryImg}>
          <img src="/cliente-dos.webp" alt="rosario" />
        </div>
        <div className={styles.galeryImg}>
          <img src="/cliente-tres.webp" alt="buenos aires" />
        </div>
        <div className={styles.galeryImg}>
          <img src="/cliente-cuatro.webp" alt="san juan" />
        </div>
        <div className={styles.galeryImg}>
          <img src="/cliente-cinco.webp" alt="misiones" />
        </div>
        <div className={styles.galeryImg}>
          <img src="/cliente-seis.webp" alt="mendoza" />
        </div>
      </div>
    </section>
  );
}
