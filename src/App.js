import { React, useState } from "react";
import Contenedor from "./Contenedor";
import { ThemeProvider } from "@material-ui/core/styles";
//import theme from "./temConfig";
import { createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

function App() {
  const [modo, setModo] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: modo ? "dark" : "light",
    },
  });
  console.log(modo);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Contenedor modo={modo} setModo={setModo} />
    </ThemeProvider>
  );
}

export default App;
