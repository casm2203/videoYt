import { UPDATE_RESPONSIVE } from "../actions/responsiveAction";

// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import Checkbox from "@mui/material/Checkbox";
// // Reducer
// // Es una funcion pura que nos regresa el
// // estado actual
// function JavaScriptMedia() {
//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.up("sm"));
//   const handleChange = () => {
//     console.log(matches, "holaaaa match");
//   };
//   return (
//     <Checkbox
//       checked={matches}
//       onChange={handleChange}
//       inputProps={{ "aria-label": "controlled" }}
//     />
//   );
// }
const initialState = true;

function responsive(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RESPONSIVE:
      return !state;
    default:
      return state;
  }
}

export default responsive;
