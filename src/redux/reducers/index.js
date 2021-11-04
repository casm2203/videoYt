import { combineReducers } from "redux";
import darkMode from "./darkModeReducer";
import responsive from "./responsiveReducer";

export default combineReducers({
  darkMode,
  responsive,
});
