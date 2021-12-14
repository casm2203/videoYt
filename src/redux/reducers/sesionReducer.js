import { UPDATE_SESION } from "../actions/sesionAction";
const initialState = { sesionActiva: {} };

function sesion(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SESION:
      return {
        sesionActiva: action.payload.sesion,
      };
    default:
      return state;
  }
}

export default sesion;
