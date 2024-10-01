/* eslint-disable @next/next/no-img-element */
import { CardDestinosType } from "@/type/cardDestinos";
import styles from "./carddestinos.module.css";
export default function CardDestinos({
  id,
  destino,
  origen,
  urlImagen,
}: CardDestinosType) {
  return (
    <section key={id} className={styles.cardDestinos}>
      <div className={styles.cardDestinosImg}>
        <img src={urlImagen} alt={destino} />
        <div className={styles.overlay}>
          <p>desde {origen}</p> {/* Origen */}
        </div>
      </div>
      <div className={styles.cardsContent}>
        <h3>{destino}</h3>
      </div>
    </section>
  );
}
