import React from "react";
//UI
import { Grid, makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import persona from "../../../assets/cris.jpg";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Yo = () => {
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
    cris: {
      borderRadius: "50%",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.gridHome}>
      <Grid item xs={12} sm={12} md={8}>
        <Typography variant="h4" gutterBottom component="div" align="center">
          🎧<b>Desarrollado por</b>
        </Typography>
        <Grid className={classes.contentCris} container justify="center">
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
        <Typography variant="h4" gutterBottom component="div" align="center">
          <b>Cristian Suarez</b>
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          component="div"
          align="center"
          className={classes.description}
        >
          <b>Futuro Ing. de sistemas✌</b>
        </Typography>
        <Grid className={classes.contentCris} container justify="center">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/cristian.suarezcasm/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="delete">
              <FacebookIcon />
            </IconButton>
          </a>
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/cristian-suarez2203"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="delete">
              <LinkedInIcon />
            </IconButton>
          </a>

          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=573015748542&text=Hola"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="delete">
              <WhatsAppIcon />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Yo;
