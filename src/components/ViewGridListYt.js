import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import GridOnIcon from "@material-ui/icons/GridOn";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
const useStyles = makeStyles((theme) => ({
  views: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const ViewYt = ({ handleView }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.views} container justify="center" xs={12}>
      <ButtonGroup variant="contained" color="inherit">
        <IconButton onClick={handleView} aria-label="delete">
          <GridOnIcon />
        </IconButton>
        <IconButton onClick={handleView} aria-label="edit">
          <ViewColumnIcon />
        </IconButton>
      </ButtonGroup>
    </Grid>
  );
};

export default ViewYt;
