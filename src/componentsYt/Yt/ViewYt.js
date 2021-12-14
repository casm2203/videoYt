import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
//UI
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//Firebase
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseyt/firebaseConfig";

const ViewYt = ({ dataToView, responsive }) => {
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

  const classes = useStyles();
  const [vidio, setVidio] = useState([]);
  let location = useLocation();

  useEffect(() => {
    let locacion = location.pathname.slice(1, 21);
    const q = query(collection(db, "videos"), where("id", "==", locacion));
    // eslint-disable-next-line
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const datos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setVidio(datos[0]);
    });
    // eslint-disable-next-line
  }, []);

  const { name, descripcion, enlaceEmbed } = vidio || dataToView;

  return (
    <Grid className={classes.gridItems}>
      <Paper className={classes.content} elevation={5}>
        <Grid item xs={12} align="center">
          <Typography variant="h4" color="initial">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${enlaceEmbed}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="initial">
            <b>Descripcion</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="initial">
            {descripcion}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.buttonMenu}>
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
export default connect(mapStateToProps)(ViewYt);
