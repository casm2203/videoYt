import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import "./Loader.css";

const useStyles = makeStyles((theme) => ({
  gridItems: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridItems} container justify="center" xs={12}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Grid>
  );
};

export default Loader;
