import Card from "../card/Card";
import styles from "./flota.module.css";
import data from "@/data/flota.json";
export default function Flota() {
  return (
    <div id="flota" className={styles.flota}>
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
    </div>
  );
}
