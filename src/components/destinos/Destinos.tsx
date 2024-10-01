import CardDestinos from "../cardDestinos/CardDestinos";
import styles from "./destinos.module.css";
import data from "@/data/destinos.json";

export default function Destinos() {
  return (
    <section id="destinos" className={styles.destinos}>
      <h2>Destinos</h2>
      <div className={styles.cards}>
        {data.map((card) => (
          <CardDestinos
            id={card.id}
            destino={card.destino}
            origen={card.origen}
            urlImagen={card.urlImagen}
            key={card.id}
          />
        ))}
      </div>
    </section>
  );
}
