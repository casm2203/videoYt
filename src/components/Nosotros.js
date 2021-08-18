import React from "react";
import persona from "../assets/cris.jpg";
import sutherland from "../assets/sutherland.png";
import gocargo from "../assets/gocargo.png";
import sagicc from "../assets/sagicc.jpg";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridItems: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  content: {
    width: "50%",
    margin: "auto",
    padding: "20px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    marginLeft: "5px",
  },
  ButtonLink: {
    color: "Red",
  },
  buttonMenu: {
    marginTop: "2rem",
  },
  contentTitle: {
    justifyContent: "center",
    marginBottom: "20px",
  },
  name: {
    background: "red",
    borderRadius: "0.25rem",
    color: "white",
    padding: "5px",
  },
  contentCris: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  cris: {
    borderRadius: "50%",
  },
}));

const Nosotros = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridItems} xs={12}>
      <Paper className={classes.content} elevation={5}>
        <Grid className={classes.contentTitle} container xs={12}>
          <Typography variant="h4" color="initial">
            Hola <span className={classes.name}>Soy Cristian Suarez</span>,
            Mucho gusto.
          </Typography>
        </Grid>
        <Grid container justify="center" xs={12}>
          <Typography align="justify" variant="body1" color="initial">
            Soy actualmente estudiante de Ingeniería de Sistemas en Sexto
            semestre de la Universidad de la costa ubicada en
            Barranquilla/Colombia, me dedico cómo soporte de primer nivel de una
            plataforma web omnicanal de atención al cliente de diferentes
            empresas en colombia y otros paises de latinoamerica. me encargo de
            brindar soluciones a diferentes requerimientos cómo incidentes,
            resolución de dudas y solicitudes de ajustes en la instancias. Por
            otro lado, en estos momentos me encuentro practicando React ya que
            me apasiona el Front-End por lo que me gustaría adquirir experiencia
            y más habiliadades que me aporten a ser mejor cada día.
          </Typography>
        </Grid>

        <Grid
          className={classes.contentCris}
          container
          xs={12}
          justify="center"
        >
          <img
            className={classes.cris}
            src={persona}
            alt="Persona"
            width="189"
            height="170"
          />
        </Grid>
        <Grid container justify="start" xs={12}>
          <Typography variant="body1" color="initial">
            <b>Mis experiencias:</b>
          </Typography>
        </Grid>
        <Grid container xs={12} justify="space-around">
          <a
            href="https://www.sutherlandglobal.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={sutherland} alt="sutherland" width="160" height="100" />
          </a>
          <a href="https://www.sagicc.co/" target="_blank" rel="noreferrer">
            <img src={sagicc} alt="sagicc" width="160" height="100" />
          </a>
          <a href="https://www.gocargo.co/" target="_blank" rel="noreferrer">
            <img src={gocargo} alt="sagicc" width="160" height="100" />
          </a>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Nosotros;
