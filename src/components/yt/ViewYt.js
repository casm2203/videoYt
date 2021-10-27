import React from "react";
import { NavLink } from "react-router-dom";
//UI
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const useStyles = makeStyles((theme) => ({
  gridItems: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  content: {
    width: "80%",
    margin: "auto",
    padding: "20px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    marginLeft: "5px",
  },
  buttonMenu: {
    marginTop: "2rem",
  },
  ButtonLink: {
    background: "red",
    color: "white",
  },
}));

const ViewYt = (props) => {
  const classes = useStyles();
  const { name, descripcion, enlace } = props.dataToView;

  return (
    <Grid className={classes.gridItems} xs={12}>
      <Paper className={classes.content} elevation={5}>
        <Grid container>
          <Grid container xs={12} align="center">
            <Typography variant="h4" color="initial">
              {name}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${enlace.slice(32)}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" color="initial">
              <b>Descripcion</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="p" color="initial">
              {descripcion}
            </Typography>
          </Grid>
          <Grid className={classes.buttonMenu} item xs={12}>
            <NavLink
              activeClassName={classes.ButtonLinkActive}
              className={classes.link}
              to="/"
            >
              <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                className={classes.ButtonLink}
                size="small"
              >
                Salir
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ViewYt;
