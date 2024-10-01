"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import style from "./form.module.css";
import {
  validateNombre,
  validateTelefono,
  validateFecha,
  validatePasajeros,
  validateRequired,
} from "../../utils/verificarForm";
import { FormData } from "@/type/form";

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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    const nombreError = validateNombre(formData.nombre);
    if (nombreError) newErrors.nombre = nombreError;

    const telefonoError = validateTelefono(formData.telefono);
    if (telefonoError) newErrors.telefono = telefonoError;

    const fechaSalidaError = validateFecha(formData.fechaSalida);
    if (fechaSalidaError) newErrors.fechaSalida = fechaSalidaError;

    const desdeError = validateRequired(formData.desde, "El origen");
    if (desdeError) newErrors.desde = desdeError;

    const hastaError = validateRequired(formData.hasta, "El destino");
    if (hastaError) newErrors.hasta = hastaError;

    const fechaRegresoError = validateFecha(formData.fechaRegreso);
    if (fechaRegresoError) newErrors.fechaRegreso = fechaRegresoError;

    const pasajerosError = validatePasajeros(formData.pasajeros);
    if (pasajerosError) newErrors.pasajeros = pasajerosError;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      const mensaje = `*📝 COTIZACIÓN DE VIAJE*%0A
      *Nombre y Apellido:* ${formData.nombre}%0A
      *📞 Teléfono:* ${formData.telefono}%0A
      *🗓️ Fecha de Salida:* ${formData.fechaSalida}%0A
      *🚩 Desde:* ${formData.desde}%0A
      *🏁 Hasta:* ${formData.hasta}%0A
      *🗓️ Fecha de Regreso:* ${formData.fechaRegreso}%0A
      *👥 Cantidad de Pasajeros:* ${formData.pasajeros}%0A
      *📝 Comentarios Adicionales:* ${formData.comentarios || "Ninguno"}`;

      const whatsappURL = `https://wa.me/1234567890?text=${mensaje}`;

      window.open(whatsappURL, "_blank");

      setTimeout(() => {
        setLoading(false);
        setFormData({
          nombre: "",
          telefono: "",
          fechaSalida: "",
          desde: "",
          hasta: "",
          fechaRegreso: "",
          pasajeros: "",
          comentarios: "",
        });
      }, 1000); // Simular el tiempo de envío
    }
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
        {errors.nombre && <p className={style.error}>{errors.nombre}</p>}

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
        />
        {errors.telefono && <p className={style.error}>{errors.telefono}</p>}

        <input
          type="text"
          name="fechaSalida"
          placeholder="Fecha de salida (dd/mm/yyyy)"
          value={formData.fechaSalida}
          onChange={handleChange}
        />
        {errors.fechaSalida && (
          <p className={style.error}>{errors.fechaSalida}</p>
        )}

        <input
          type="text"
          name="desde"
          placeholder="Desde"
          value={formData.desde}
          onChange={handleChange}
        />
        {errors.desde && <p className={style.error}>{errors.desde}</p>}

        <input
          type="text"
          name="hasta"
          placeholder="Hasta"
          value={formData.hasta}
          onChange={handleChange}
        />
        {errors.hasta && <p className={style.error}>{errors.hasta}</p>}

        <input
          type="text"
          name="fechaRegreso"
          placeholder="Fecha de regreso (dd/mm/yyyy)"
          value={formData.fechaRegreso}
          onChange={handleChange}
        />
        {errors.fechaRegreso && (
          <p className={style.error}>{errors.fechaRegreso}</p>
        )}

        <input
          type="number"
          name="pasajeros"
          placeholder="Cantidad de pasajeros"
          value={formData.pasajeros}
          onChange={handleChange}
        />
        {errors.pasajeros && <p className={style.error}>{errors.pasajeros}</p>}

        <textarea
          name="comentarios"
          placeholder="Comentarios adicionales"
          value={formData.comentarios}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "ENVIAR COTIZACIÓN"}
        </button>
      </form>
    </div>
  );
}
