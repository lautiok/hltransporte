import styles from "./notification.module.css";
import { Mail, Phone } from "lucide-react";

export default function Notification() {
  return (
    <section className={styles.notification}>
      <div className={styles.notification_email_number}>
        <div className={styles.notification_contact}>
          <a href="maito:cotizaciones@hltransporte.com.ar" target="_blank">
            <Mail />
            <span>cotizaciones@hltransporte.com.ar</span>
          </a>
        </div>
        <div className={styles.notification_contact}>
          <a href="https://wa.me/5493515326971" target="_blank">
            <Phone />
            <span>+54 03515326971</span>
          </a>
        </div>
      </div>
      <div className={styles.notificationtext}>
        <p>Cordoba, Argentina</p>
      </div>
    </section>
  );
}
