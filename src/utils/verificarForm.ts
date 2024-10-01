export const validateNombre = (nombre: string): string | null => {
  if (!nombre.trim()) {
    return "El nombre es requerido.";
  } else if (nombre.trim().split(" ").length < 2) {
    return "Debes ingresar nombre y apellido (mínimo dos palabras).";
  }
  return null;
};

export const validateTelefono = (telefono: string): string | null => {
  if (!telefono.trim()) {
    return "El teléfono es requerido.";
  } else if (!/^\d+$/.test(telefono)) {
    return "El teléfono debe contener solo números.";
  }
  return null;
};

export const validateFecha = (fecha: string): string | null => {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!regex.test(fecha)) {
    return "La fecha debe tener el formato dd/mm/yyyy.";
  }

  const [day, month, year] = fecha.split("/").map(Number);
  const inputDate = new Date(year, month - 1, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (inputDate < today) {
    return "La fecha debe ser igual o posterior a hoy.";
  }

  return null;
};

export const validatePasajeros = (
  pasajeros: number | string
): string | null => {
  if (!pasajeros || Number(pasajeros) <= 0) {
    return "La cantidad de pasajeros debe ser mayor que 0.";
  }
  return null;
};

export const validateRequired = (
  field: string,
  fieldName: string
): string | null => {
  if (!field.trim()) {
    return `${fieldName} es requerido.`;
  }
  return null;
};

export const validateHora = (hora: string): string | null => {
  const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  if (!regex.test(hora)) {
    return "La hora debe tener el formato HH:MM.";
  }
  return null;
};
