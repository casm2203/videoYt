import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
//UI
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Save from "@material-ui/icons/Save";
import ClearIcon from "@material-ui/icons/Clear";

const initialForm = {
  name: "",
  descripcion: "",
  enlace: "",
  enlaceEmbed: "",
  id: null,
  likes: 0,
};
const FormYt = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  responsive,
}) => {
  const useStyles = makeStyles((theme) => ({
    gridItems: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    content: {
      width: responsive ? "50%" : "80%",
      margin: "auto",
      padding: "20px",
    },
    avatar: {
      backgroundColor: "red",
    },
    gridButton: {
      marginTop: "15px",
      display: "flex",
      justifyContent: "space-between",
    },
  }));

  const classes = useStyles();
  const [form, setForm] = useState(initialForm);
  let history = useHistory();

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.enlaceEmbed.value, "validando donde aparece");
    if (!form.name || !form.descripcion) {
      alert("Datos incompletos");
      return;
    }

    if (dataToEdit) {
      updateData({ ...form, enlaceEmbed: e.target.enlaceEmbed.value });
    } else {
      createData({ ...form, enlaceEmbed: e.target.enlaceEmbed.value });
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
    history.push("/videos");
  };

  return (
    <Grid className={classes.gridItems} item xs={12}>
      <Paper className={classes.content} elevation={5}>
        <Grid align="center">
          <Avatar className={classes.avatar}>
            <PlayArrowIcon />
          </Avatar>
          {dataToEdit ? <h2>Editar Video</h2> : <h2>Agregar Video</h2>}
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container justify="space-between" spacing={1}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Nombre del video"
                placeholder="Nombre del video"
                value={form.name}
                name="name"
                fullWidth
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Enlace del video"
                placeholder="Enlace del video"
                type="text"
                value={form.enlace}
                onChange={handleChange}
                name="enlace"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Enlace del video embebido"
                placeholder="Enlace del video embebido"
                type="text"
                value={form.enlace.slice(32)}
                name="enlaceEmbed"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Descripcion"
                placeholder="Descripcion"
                type="text"
                value={form.descripcion}
                onChange={handleChange}
                name="descripcion"
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>

            <Grid className={classes.gridButton} item xs={12}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ClearIcon />}
                type="reset"
                onClick={handleReset}
              >
                Limpiar
              </Button>

              <Button
                variant="contained"
                color="secondary"
                startIcon={<Save />}
                type="submit"
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

//Redux state
const mapStateToProps = (state) => {
  return {
    responsive: state.responsive,
  };
};
export default connect(mapStateToProps)(FormYt);
