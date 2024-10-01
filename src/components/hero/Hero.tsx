import styles from "./hero.module.css";
import { CircleArrowDown } from "lucide-react";
export default function Hero() {
  return (
    <div id="hero" className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            CONECTAMOS <br /> DESTINOS.
          </h1>
          <p>
            Nos encargamos de cada detalle de tu viaje, brindando una
            experiencia cómoda y segura, siempre a tiempo.
          </p>
          <button>
            <a href="/cotizaciones">Cotiza tu viaje</a>
          </button>
        </div>
      </div>
      <div className={styles.bajar}>
        <a href="#servicios">
          <CircleArrowDown color="#fff" size={25} />
        </a>
      </div>
    </div>
  );
}
