import React from "react";
import Contenedor from "./Contenedor";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./temConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;
