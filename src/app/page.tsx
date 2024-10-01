import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import Servicios from "@/components/servicios/Servicios";
import Destinos from "@/components/destinos/Destinos";
import Clientes from "@/components/clientes/Clientes";
import Carrousel from "@/components/carrousel/Carrousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Servicios />
      <Destinos />
      <Clientes />
      <Carrousel />
    </main>
  );
}
