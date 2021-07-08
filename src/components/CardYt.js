import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ data }) {
  const classes = useStyles();

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
            <CardActions>
              <Button size="small" color="primary">
                Compartir
              </Button>
              <Button size="small" color="primary">
                Ver más
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}
