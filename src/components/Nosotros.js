import React from "react";
import { connect } from "react-redux";
import { updateResponsive } from "../redux/actions/responsiveAction";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

import persona from "../assets/cris.jpg";
import sutherland from "../assets/sutherland.png";
import gocargo from "../assets/gocargo.png";
import sagicc from "../assets/sagicc.jpg";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const Nosotros = ({ responsive, updateResponsive }) => {
  const useStyles = makeStyles((theme) => ({
    gridItems: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    content: {
      width: responsive ? "50%" : "80%", // 70 mobile 50desk
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

  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = () => {
    const update = updateResponsive;

    console.log(matches, "holaaaa match");
  };

  return (
    <Grid className={classes.gridItems} xs={12}>
      <Paper className={classes.content} elevation={5}>
        <Checkbox
          checked={matches}
          onChange={handleChange()}
          inputProps={{ "aria-label": "controlled" }}
        />
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
            Barranquilla/Colombia, me dedico cómo soporte de Software primer
            nivel a una plataforma web omnicanal de atención al cliente en
            diferentes empresas de colombia y otros paises de latinoamerica. me
            encargo de brindar soluciones a diferentes requerimientos cómo
            incidentes, resolución de dudas y solicitudes de ajustes en la
            instancias. Por otro lado, en estos momentos me encuentro
            practicando React ya que me gusta el Front-End por lo que me
            gustaría adquirir experiencia y habilidades que aporten a ser mejor
            cada día y al crecimiento de la empresa.
          </Typography>
        </Grid>

        <Grid
          className={classes.contentCris}
          container
          xs={12}
          justify="center"
        >
          <a
            href="https://www.linkedin.com/in/cristian-suarez2203"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={classes.cris}
              src={persona}
              alt="Persona"
              width="189"
              height="170"
            />
          </a>
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
const mapStateToProps = (state) => {
  return {
    responsive: state.responsive,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateResponsive: () => dispatch(updateResponsive()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nosotros);
