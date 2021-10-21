import { UPDATE_MODE } from "../actions/darkModeAction";

// Reducer
// Es una funcion pura que nos regresa el
// estado actual
const initialState = false;

function darkMode(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MODE:
      return !state;
    default:
      return state;
  }
}

export default darkMode;
