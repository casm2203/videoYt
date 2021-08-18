import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ButtonGroup, Grid, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
  },
  label: {
    textTransform: "capitalize",
  },
});

export default function MediaCard({
  data,
  setDataToEdit,
  deleteData,
  setDataToView,
}) {
  let history = useHistory();
  const classes = useStyles();
  const handleEdit = (el) => {
    setDataToEdit(el);
    history.push(`/${el.id}/editar`);
  };

  const handleView = (el) => {
    setDataToView(el);
    history.push(`/${el.id}/ver`);
  };

  return (
    <>
      {data.map((el) => (
        <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
          <Card className={classes.root}>
            <CardActionArea>
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${el.enlace.slice(32)}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <CardContent>
                <Typography gutterBottom variant="h5" noWrap component="h5">
                  {el.name}
                </Typography>
                <Typography
                  variant="body2"
                  noWrap
                  color="textSecondary"
                  component="p"
                >
                  {el.descripcion}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
              <Button
                onClick={() => handleView(el)}
                size="small"
                color="primary"
                className={classes.label}
              >
                Ver más
              </Button>
              <ButtonGroup size="small" variant="contained" color="primary">
                <IconButton onClick={() => handleEdit(el)} aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => deleteData(el.id)}
                  aria-label="delete"
                >
                  <DeleteIcon color="secondary" />
                </IconButton>
              </ButtonGroup>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
