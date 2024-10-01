/* eslint-disable @next/next/no-img-element */
import styles from "./cardpublicidad.module.css";
import { CardPublicidadType } from "@/type/cardPublicidad";
export default function CardPublicidad({
  id,
  name,
  description,
  urlImagen,
}: CardPublicidadType) {
  return (
    <section key={id} className={styles.cardDestinos}>
      <div className={styles.cardDestinosImg}>
        <img src={urlImagen} alt={name} />
        <div className={styles.overlay}>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.cardsContent}>
        <h3>{name}</h3>
      </div>
    </section>
  );
}
