// Nombres de acciones
export const UPDATE_SESION = "UPDATE_SESION";

// Creadores de acciones
export const updateSesion = (sesion) => {
  return {
    type: UPDATE_SESION,
    payload: {
      sesion,
    },
  };
};
