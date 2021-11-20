import React from "react";
import { makeStyles } from "@material-ui/core";
import CardYtSkeleton from "../componentsYt/Yt/CardYtSkeleton";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridView: {
    width: "98%",
    margin: "auto",
  },
  content: {
    width: "70%", // 70 mobile 50desk
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

const Nosotrostest = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.gridView}
      justify="flex-start"
      container
      spacing={2}
    >
      <CardYtSkeleton />
    </Grid>
  );
};
export default Nosotrostest;
