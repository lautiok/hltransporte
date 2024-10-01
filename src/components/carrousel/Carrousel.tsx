import data from "../../data/publicidad.json";
import CardPublicidad from "../cardPublicidad/CardPublicidad";
import styles from "./carrousel.module.css";
export default function Carrousel() {
  return (
    <section className={styles.carrouselContainer}>
      <h2>Maneras de disfrutar tu viaje</h2>
      <div className={styles.carrousel}>
        {data.map((item) => (
          <CardPublicidad
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            urlImagen={item.urlImagen}
          />
        ))}
      </div>
    </section>
  );
}
