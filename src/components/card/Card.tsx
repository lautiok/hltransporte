/* eslint-disable @next/next/no-img-element */
import { CardType } from "@/type/card";
import styles from "./card.module.css";
import {
  Plane,
  CalendarHeart,
  Users,
  Split,
  School,
  LoaderPinwheel,
  BusFront,
} from "lucide-react";

export default function Card({ svg, name, description, id }: CardType) {
  return (
    <article className={styles.card} key={id}>
      <header className={styles.cardHeader}>
        {svg === "plane" ? (
          <Plane color="#ff9d3c" />
        ) : svg === "calendar" ? (
          <CalendarHeart color="#ff9d3c" />
        ) : svg === "users" ? (
          <Users color="#ff9d3c" />
        ) : svg === "split" ? (
          <Split color="#ff9d3c" />
        ) : svg === "school" ? (
          <School color="#ff9d3c" />
        ) : svg === "loader" ? (
          <LoaderPinwheel color="#ff9d3c" />
        ) : (
          <BusFront color="#ff9d3c" />
        )}
      </header>
      <div className={styles.cardsContent}>
        <h3>{name}</h3>
        <p>{description}</p>
        <button>
          <a href="https://wa.me/5493515326971" target="_blank">
            saber más
          </a>
        </button>
      </div>
    </article>
  );
}
