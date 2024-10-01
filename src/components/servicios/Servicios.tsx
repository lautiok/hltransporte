import Card from "../card/Card";
import styles from "./servicios.module.css";
import data from "@/data/servicios.json";
export default function Servicios() {
  return (
    <section id="servicios" className={styles.servicios}>
      <h2>Servicios</h2>
      <div className={styles.cards}>
        {data.map((card) => (
          <Card
            id={card.id}
            svg={card.svg}
            name={card.name}
            description={card.description}
            link={card.link}
            key={card.id}
          />
        ))}
      </div>
    </section>
  );
}
