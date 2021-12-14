import React, { useState } from "react";
import { connect } from "react-redux";
import { updateSesion } from "./../../redux/actions/sesionAction";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
//Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../firebaseyt/firebaseConfig";
//UI
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Send from "@material-ui/icons/Send";
import LoginStyles from "../Style/StylesYt";

const useStyles = makeStyles(LoginStyles);

const initialForm = {
  correo: "",
  password: "",
};

const InicioSesion = ({ responsive, updateSesion }) => {
  const classes = useStyles({ responsive });
  const [form, setForm] = useState(initialForm);
  let history = useHistory();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.correo || !form.password) {
      alert("Datos incompletos");
      return;
    }
    signInWithEmailAndPassword(auth, form.correo, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "SI INICIO");
        updateSesion(user);
      })
      .catch((error) => {
        console.log(error, "NO INICIO");
      });
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    history.push("/");
  };

  return (
    <Grid className={classes.gridItems} item xs={12}>
      <Paper className={classes.content} elevation={5}>
        <Grid align="center">
          <Avatar className={classes.avatar}>
            <PlayArrowIcon />
          </Avatar>
          <h2>Iniciar Sesion</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container justify="space-between" spacing={2}>
            {/* correo */}
            <Grid item xs={12}>
              <TextField
                type="email"
                variant="outlined"
                label="Correo electronico"
                placeholder="Correo electronico"
                value={form.correo}
                name="correo"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>
            {/* password */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Contraseña"
                placeholder="Contraseña"
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
                fullWidth
                required
              />
            </Grid>

            <Grid className={classes.gridFlex} xs={12}>
              <Button
                variant="contained"
                startIcon={<Send />}
                color="secondary"
                type="submit"
              >
                Ingresar
              </Button>
            </Grid>
            <Grid className={classes.gridDivider} xs={12}>
              ____________________________
            </Grid>

            <Grid className={classes.gridFlex} xs={12}>
              <NavLink exact className={classes.link} to="/registrarme">
                <Button variant="outline">Registrarme</Button>
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};
//Redux State
const mapStateToProps = (state) => {
  return {
    sesionActiva: state.sesion.sesionActiva,
    responsive: state.responsive,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSesion: (sesion) => dispatch(updateSesion(sesion)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InicioSesion);
