import styles from "./politicaPrivacidad.module.css";
export default function PoliticaPrivacidad() {
  return (
    <article className={styles.politica}>
      <h2>Política de Privacidad</h2>
      <p>
        En HL Turismo (en adelante, “la Empresa”), respetamos y protegemos la
        privacidad de nuestros usuarios y clientes. Esta Política de Privacidad
        describe cómo recopilamos, usamos y protegemos la información personal
        que nos proporcionas a través de nuestro sitio web
        www.hltransporte.com.ar.
      </p>
      <p>
        1. Información que Recopilamos Recopilamos información personal que tú,
        como usuario, decides proporcionarnos al interactuar con nuestro sitio
        web. Esto puede incluir, entre otros: Datos de contacto: Nombre,
        dirección de correo electrónico, número de teléfono. Información sobre
        reservas y servicios: Detalles relacionados con las reservas de
        transporte o servicios turísticos. Datos de facturación: Información
        necesaria para procesar pagos. Datos de navegación: Información sobre
        cómo interactúas con nuestro sitio web, como la dirección IP, tipo de
        navegador, y páginas visitadas.
      </p>
      <p>
        2. Uso de la Información La información recopilada se utiliza para los
        siguientes propósitos: Procesar reservas y servicios de transporte o
        turismo. Comunicarnos contigo para proporcionar información sobre
        nuestros servicios. Mejorar la experiencia del usuario en nuestro sitio
        web. Cumplir con requisitos legales y regulatorios.
      </p>
      <p>
        3. Protección de la Información Implementamos medidas de seguridad
        técnicas y organizativas para proteger tu información personal contra el
        acceso no autorizado, la divulgación o destrucción. Sin embargo, ten en
        cuenta que ningún método de transmisión por Internet o almacenamiento
        electrónico es 100% seguro, por lo que no podemos garantizar la
        seguridad absoluta.
      </p>
      <p>
        4. Compartir Información con Terceros No vendemos, alquilamos ni
        compartimos tu información personal con terceros, excepto en los
        siguientes casos: Cuando sea necesario para completar una transacción
        solicitada (por ejemplo, con proveedores de servicios de transporte o
        turismo). Para cumplir con obligaciones legales o regulatorias. Cuando
        lo autorices expresamente.
      </p>
      <p>
        5. Tus Derechos De acuerdo con la Ley de Protección de Datos Personales
        de Argentina, tienes los siguientes derechos respecto a tu información
        personal: Acceso: Puedes solicitar acceso a los datos personales que
        hemos recopilado sobre ti. Rectificación: Si los datos son incorrectos,
        puedes solicitar que se corrijan. Eliminación: Puedes solicitar la
        eliminación de tus datos personales en cualquier momento. Oposición:
        Puedes oponerte al tratamiento de tus datos con fines de marketing u
        otros fines legítimos. Para ejercer estos derechos, contáctanos a través
        de contacto@hltransporte.com.ar.
      </p>

      <p>
        6. Cambios en la Política de Privacidad Nos reservamos el derecho de
        modificar esta Política de Privacidad en cualquier momento. Cualquier
        cambio será publicado en esta página y entrará en vigencia
        inmediatamente.
      </p>
      <p>
        7. Contacto Si tienes preguntas o inquietudes sobre nuestra Política de
        Privacidad, o deseas ejercer tus derechos, puedes comunicarte con
        nosotros a través de: <br /> Correo electrónico:
        contacto@hltransporte.com.ar
        <br /> Teléfono: +54 03515326971
      </p>
      <p>Fecha de última actualización: {new Date().toLocaleDateString()}</p>
    </article>
  );
}
