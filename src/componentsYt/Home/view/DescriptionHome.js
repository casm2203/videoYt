import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";

const DescriptionHome = () => {
  const useStyles = makeStyles((theme) => ({
    gridView: {
      width: "98%",
      margin: "auto",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    gridHome: {
      width: "60%",
      margin: "auto",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    description: {
      color: "#999",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.gridHome}>
      <Grid item xs={12} sm={12} md={8}>
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          align="center"
          sx={{ color: "red" }}
        >
          <b>Yt Music 🎧</b>
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          align="center"
          className={classes.description}
        >
          Les presento una plataforma desarrollada con el fin de colocar en
          practica diferentes tecnologías aprendidas en el proceso de aspirar a
          ser FrontEnd, tiene como finalidad agregar videos tomando ciertos
          datos de youtube teniendo la posibilidad de crear una PlayList publica
          en la cual cualquier público puede agregar o darle Like a los videos.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DescriptionHome;
