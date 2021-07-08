//Es necesario para utilizar el proveedor de temas personalizados
import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: red["A400"],
    },
  },
});

export default theme;
