import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//UI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
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
  styleCardContent: {
    padding: "10px",
  },
  gridView: {
    width: "98%",
    margin: "auto",
  },
});

const MediaCardSkeleton = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.gridView}
      justify="flex-start"
      container
      spacing={2}
    >
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card className={classes.root}>
          <CardActionArea>
            <Skeleton
              sx={{ bgcolor: "grey.500" }}
              variant="rectangular"
              width="100%"
            >
              <div style={{ paddingTop: "200px" }} />
            </Skeleton>
            <CardContent className={classes.styleCardContent}>
              <Skeleton sx={{ bgcolor: "grey.500" }} width="100%">
                <Typography>.</Typography>
                <div style={{ paddingTop: "3%" }} />
              </Skeleton>
              <Skeleton sx={{ bgcolor: "grey.500" }} width="70%">
                <Typography>.</Typography>
              </Skeleton>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ bgcolor: "grey.500" }} className={classes.actions}>
            <Skeleton
              sx={{ bgcolor: "grey.500" }}
              variant="rectangular"
              width="20%"
            >
              <div style={{ paddingTop: "50%" }} />
            </Skeleton>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ margin: 0.5 }}>
                <Skeleton sx={{ bgcolor: "grey.500" }} variant="circular">
                  <Avatar />
                </Skeleton>
              </Box>
              <Box sx={{ margin: 0.5 }}>
                <Skeleton sx={{ bgcolor: "grey.500" }} variant="circular">
                  <Avatar />
                </Skeleton>
              </Box>
              <Box sx={{ margin: 0.5 }}>
                <Skeleton sx={{ bgcolor: "grey.500" }} variant="circular">
                  <Avatar />
                </Skeleton>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MediaCardSkeleton;
