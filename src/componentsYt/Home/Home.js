import React from "react";
import { connect } from "react-redux";
//Components
import FormContactYt from "../Yt/FormContactYt";
import DescriptionHome from "./view/DescriptionHome";
import CardHome from "./view/CardHome";
import Yo from "./view/Yo";
//UI
import Box from "@mui/material/Box";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Typography from "@mui/material/Typography";

const backgroundImage =
  "https://img.olhardigital.com.br/wp-content/uploads/2021/07/YouTube-iPhone-1000x450.jpg";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    gridItems: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    gridView: {
      width: "98%",
      margin: "auto",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    gridHome: {
      width: "80%",
      margin: "auto",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    content: {
      //width: responsive ? "50%" : "80%",
      width: "80%",
      margin: "auto",
      padding: "20px",
    },
    imgStart: {
      width: "100%",
      height: "450px",
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: "#red", // Average color of the background image.
      backgroundPosition: "center",
      color: "white",
      fontSize: "36px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "5px",
      borderRadius: "5px",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.gridItems}>
      <Paper className={classes.content} elevation={5}>
        <Grid item>
          <Box className={classes.imgStart}>Hola!</Box>
        </Grid>
        <DescriptionHome />
        <Grid container justify="center" className={classes.gridHome}>
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h5" align="center">
              <b>Tecnologías implementadas:</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.gridView}>
          <CardHome
            title="React"
            subtitle="Library Js"
            imgUrl="https://img.icons8.com/color/240/000000/react-native.png"
          />
          <CardHome
            title="Redux"
            subtitle="State management"
            imgUrl="https://img.icons8.com/color/240/000000/redux.png"
          />
          <CardHome
            title="Material UI"
            subtitle="UI library"
            imgUrl="https://img.icons8.com/color/480/material-ui.png"
          />
          <CardHome
            title="Github"
            subtitle="version control"
            imgUrl="https://img.icons8.com/ios-glyphs/240/000000/github.png"
          />
          <CardHome
            title="Firebase"
            subtitle="FireStore Database"
            imgUrl="https://static.javatpoint.com/tutorial/firebase/images/firebase-firestore.png"
          />
          <CardHome
            title="Firebase"
            subtitle="Hosting"
            imgUrl="https://static.javatpoint.com/tutorial/firebase/images/firebase-hosting.png"
          />
          <CardHome
            title="Firebase"
            subtitle="Authentication"
            imgUrl="https://static.javatpoint.com/tutorial/firebase/images/firebase-authentication.png"
          />
          <CardHome
            title="FormSubmit"
            subtitle="Send Contact"
            imgUrl="https://img.icons8.com/ios/50/000000/submit-document.png"
          />
        </Grid>

        <Yo />
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h5" align="center">
              <b>Charlemos XD</b>
            </Typography>
            <FormContactYt />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

//Redux State
const mapStateToProps = (state) => {
  return {
    responsive: state.responsive,
  };
};

export default connect(mapStateToProps)(Home);
