import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Save from "@material-ui/icons/Save";
import ClearIcon from "@material-ui/icons/Clear";
import { useHistory } from "react-router-dom";
import SimpleModal from "../../pages/SimpleModal";

const initialForm = {
  name: "",
  descripcion: "",
  enlace: "",
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
    // gridButton: { esto sirve para cuando se ocupa todo el espacio mandar el contenido al fondo en caso de solo ser uno
    //   marginTop: "5px",
    //   display: "flex",
    //   justifyContent: "flex-end",
    // },
    gridButton: {
      marginTop: "15px",
      display: "flex",
      justifyContent: "space-between",
    },
  }));
  const classes = useStyles();
  const [form, setForm] = useState(initialForm);
  const [open, setOpen] = useState(false);
  let history = useHistory();
  console.log(dataToEdit);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  // const handleModal = () => {
  //   setOpen(!open);
  // };

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
    console.log(form, "handleSub");

    if (dataToEdit) {
      updateData(form);
    } else {
      createData(form);
    }
    /*
 if (form.id !== null) {
     //handleModal();
  } else {
   }
*/
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
    history.push("/");
  };

  return (
    <Grid className={classes.gridItems} xs={12}>
      <SimpleModal open={open} setOpen={setOpen} formContact={2} />
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
const mapStateToProps = (state) => {
  return {
    responsive: state.responsive,
  };
};
export default connect(mapStateToProps)(FormYt);
