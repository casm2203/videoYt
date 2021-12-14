import React, { useState } from "react";
import { connect } from "react-redux";
import { updateSesion } from "./../../redux/actions/sesionAction";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
//Firebase
import { auth } from "./../../firebaseyt/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
//UI
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginStyles from "../Style/StylesYt";

const useStyles = makeStyles(LoginStyles);

const initialForm = {
  nombre: "",
  correo: "",
  password1: "",
  password2: "",
};

const Registro = ({ responsive, updateSesion }) => {
  const classes = useStyles({ responsive });
  const [form, setForm] = useState(initialForm);
  const [mensaje, setMensaje] = useState();
  let history = useHistory();

  const handleError = (error) => {
    switch (error.code) {
      case "auth/invalid-password":
        setMensaje("La contraseña tiene que ser de al menos 6 caracteres.");
        break;
      case "auth/email-already-in-use":
        setMensaje(
          "Ya existe una cuenta con el correo electrónico proporcionado."
        );
        break;
      case "auth/invalid-email":
        setMensaje("El correo electrónico no es válido.");
        break;
      default:
        setMensaje("Hubo un error al intentar crear la cuenta.");
        break;
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validacionCorreoExRegular =
      /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    if (!validacionCorreoExRegular.test(form.correo)) {
      console.log("Por ingresa un correo electronico valido");
      return;
    }
    if (!form.correo || !form.password1 || !form.password2) {
      alert("Datos incompletos");
      return;
    }

    if (form.password1 !== form.password2) {
      console.log("Las contraseñas no son iguales");
      return;
    }
    createUserWithEmailAndPassword(auth, form.correo, form.password1)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: form.nombre,
        })
          .then(() => {
            // Profile updated!
            updateSesion(auth.currentUser);
            console.log(auth.currentUser, "esto es cuando se crea");
          })
          .catch((error) => {});
      })
      .catch((error) => {
        handleError(error);
      });
    console.log(mensaje, "final final");
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    history.push("/videos");
  };

  return (
    <Grid className={classes.gridItems} item xs={12}>
      <Paper className={classes.content} elevation={5}>
        <Grid align="center">
          <Avatar className={classes.avatar}>
            <PlayArrowIcon />
          </Avatar>
          <h2>Registro</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container justify="space-between" spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="text"
                variant="outlined"
                label="Ingresa tu nombre"
                placeholder="Ingresa tu nombre"
                value={form.nombre}
                name="nombre"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Contraseña"
                placeholder="Contraseña"
                type="password"
                value={form.password1}
                onChange={handleChange}
                name="password1"
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Repetir contraseña"
                placeholder="Repetir contraseña"
                type="password"
                value={form.password2}
                onChange={handleChange}
                name="password2"
                fullWidth
                required
              />
            </Grid>
            <Grid className={classes.gridFlex} item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PersonAddIcon />}
                type="submit"
              >
                Registrarme
              </Button>
            </Grid>
            <Grid className={classes.gridDivider} xs={12}>
              ____________________________
            </Grid>

            <Grid className={classes.gridFlex} xs={12}>
              <NavLink exact className={classes.link} to="/iniciarsesion">
                <Button variant="outline" type="submit">
                  Iniciar Sesion
                </Button>
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
    responsive: state.responsive,
    sesionActiva: state.sesion.sesionActiva,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSesion: (sesion) => dispatch(updateSesion(sesion)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registro);
