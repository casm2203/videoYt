import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import SimpleModal from "./SimpleModal";

const initialForm = {
  name: "",
  descripcion: "",
  enlace: "",
  id: null,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    width: "40%",
    margin: "auto",
    padding: "20px",
  },
  avatar: {
    backgroundColor: "red",
  },
  // gridButton: { esto sirve para cuando se ocupa todo el espacio mandar el contenido al fondo en caso de solo ser uno
  //   marginTop: "5px",
  //   display: "flex",
  //   justifyContent: "flex-end",
  // },
  gridButton: {
    marginTop: "5px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const FormYt = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const classes = useStyles();
  const [form, setForm] = useState(initialForm);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.descripcion) {
      alert("Datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
      handleModal();
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <Grid>
      <SimpleModal open={open} setOpen={setOpen} />
      <Paper className={classes.content} elevation={10}>
        <Grid align="center">
          <Avatar className={classes.avatar}>
            <PlayArrowIcon />
          </Avatar>
          {dataToEdit ? <h3>Editar Video</h3> : <h3>Agregar Video</h3>}
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container justify="space-between" spacing={1}>
            <Grid item xs={12}>
              <TextField
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
                label="Descripcion"
                placeholder="Descripcion"
                type="text"
                value={form.descripcion}
                onChange={handleChange}
                name="descripcion"
                fullWidth
                required
              />
            </Grid>

            <Grid item className={classes.gridButton} xs={12}>
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
                startIcon={<AddIcon />}
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

export default FormYt;
