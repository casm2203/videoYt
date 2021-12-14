//UI
import { Grid } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardHome: {
    display: "flex",
    width: "97%",
    margin: "2%",
    justifyContent: "space-around",
  },
}));

const CardHome = ({ title, subtitle, imgUrl }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card className={classes.cardHome}>
        <CardContent>
          <Typography component="div" variant="h6">
            <b>{title}</b>
          </Typography>
          <Typography
            variant="body2"
            noWrap
            color="textSecondary"
            component="p"
          >
            {subtitle}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{
            width: "40%",
            padding: "2%",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          image={imgUrl}
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  );
};

export default CardHome;
