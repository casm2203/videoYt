import { React } from "react";
import { connect } from "react-redux";
import Contenedor from "./components/Contenedor";
//UI
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

function App({ darkMode }) {
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Contenedor />
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps)(App);
