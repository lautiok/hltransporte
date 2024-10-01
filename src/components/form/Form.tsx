"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import style from "./form.module.css";

interface FormData {
  nombre: string;
  telefono: string;
  fechaSalida: string;
  desde: string;
  hasta: string;
  fechaRegreso: string;
  pasajeros: number | string;
  comentarios: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    fechaSalida: "",
    desde: "",
    hasta: "",
    fechaRegreso: "",
    pasajeros: "",
    comentarios: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Formatear mensaje y enviar a WhatsApp
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mensaje = `*📝 COTIZACIÓN DE VIAJE*%0A
*Nombre y Apellido:* ${formData.nombre}%0A
*📞 Teléfono:* ${formData.telefono}%0A
*📧 Email:* ${formData.email}%0A
*🗓️ Fecha de Salida:* ${formData.fechaSalida}%0A
*🚩 Desde:* ${formData.desde}%0A
*🏁 Hasta:* ${formData.hasta}%0A
*🗓️ Fecha de Regreso:* ${formData.fechaRegreso}%0A
*👥 Cantidad de Pasajeros:* ${formData.pasajeros}%0A
*🚐 Unidad a Disposición:* ${formData.unidad}%0A
*📝 Comentarios Adicionales:* ${formData.comentarios || "Ninguno"}`;

    const whatsappURL = `https://wa.me/+541136620274?text=${mensaje}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className={style.formcontainer}>
      <h2>COTIZA TU VIAJE</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre y Apellido"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />

        <input
          type="text"
          name="fechaSalida"
          placeholder="Fecha de salida"
          value={formData.fechaSalida}
          onChange={handleChange}
        />
        <input
          type="text"
          name="desde"
          placeholder="Desde"
          value={formData.desde}
          onChange={handleChange}
        />
        <input
          type="text"
          name="hasta"
          placeholder="Hasta"
          value={formData.hasta}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fechaRegreso"
          placeholder="Fecha de regreso"
          value={formData.fechaRegreso}
          onChange={handleChange}
        />
        <input
          type="number"
          name="pasajeros"
          placeholder="Cantidad de pasajeros"
          value={formData.pasajeros}
          onChange={handleChange}
        />
        <textarea
          name="comentarios"
          placeholder="Comentarios adicionales"
          value={formData.comentarios}
          onChange={handleChange}
        />
        <button type="submit">ENVIAR COTIZACIÓN</button>
      </form>
    </div>
  );
}
