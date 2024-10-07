/* eslint-disable @next/next/no-img-element */
import styles from "./footer.module.css";
import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src="/logo.webp" alt="logo" />
        </div>
        <div className={styles.footerInfo}>
          <div className={styles.footerTitle}>
            <h3>NOSOTROS</h3>
            <h3>INFORMACIÓN</h3>
            <h3>REDES SOCIALES</h3>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinksItem}>
              <Link href="/nosotros">Historia</Link>
              <Link href="/flota">Nuestra Flota</Link>
            </div>
            <div className={styles.footerLinksItem}>
              <Link href="/privacidad">Política de Privacidad</Link>
              <Link href="/#servicios">Sobre Nuestros Servicios</Link>
            </div>
            <div className={styles.footerredesItem}>
              <a
                href="https://www.instagram.com/hl_viajes_y_turismo/"
                target="_blank"
              >
                <Instagram size={24} />
              </a>
              <a href="#">
                <Linkedin size={24} />
              </a>
              <a href="#">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reserve}>
        <p>
          © {new Date().getFullYear()} Hermanos Luci Viajes y Turismo |
          desarrollado por{" "}
          <a href="https://www.nahuelguerra.com.ar/" target="_blank">
            Nahuel Guerra
          </a>
        </p>
      </div>
    </footer>
  );
}
