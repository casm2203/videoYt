import { combineReducers } from "redux";
import darkMode from "./darkModeReducer";
import responsive from "./responsiveReducer";
import sesion from "./sesionReducer";

export default combineReducers({
  darkMode,
  responsive,
  sesion,
});
