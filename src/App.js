import React from "react";
import Contenedor from "./Contenedor";
import { ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/NavBar";
import theme from "./temConfig";
import FormYt from "./components/FormYt";
import TableYt from "./components/TableYt";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Route path="/home" exact component={Contenedor} />
          <Route path="/form" exact component={FormYt} />
          <Route path="/table" exact component={TableYt} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
