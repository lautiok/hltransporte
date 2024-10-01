"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Notification from "../notification/Notification";
import styles from "./header.module.css";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.notification}>
        <Notification />
      </div>
      <nav className={`${styles.nav} ${isSticky ? styles.fixed : ""}`}>
        <section className={styles.navLogo}>
          <Link href="/">
            <h1>HL Transporte</h1>
          </Link>
        </section>
        <ul>
          <Link href="/nosotros">NOSOTROS</Link>
          <Link href="/#servicios">SERVICIOS</Link>
          <Link href="/#destinos">DESTINOS</Link>
          <Link href="/#clientes">CLIENTES</Link>
        </ul>
        <button>
          <Link href="/cotizaciones">Cotiza tu viaje</Link>
        </button>
      </nav>
    </header>
  );
}
