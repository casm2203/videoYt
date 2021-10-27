import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

//UI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Badge from "@mui/material/Badge";

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
  styleCardContent: {
    padding: "10px",
  },
});

const MediaCard = ({
  data,
  setDataToEdit,
  deleteData,
  setDataToView,
  updateData,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const increment = (el) => {
    let sum = el.likes + 1;
    const dataAumentLike = { ...el, likes: sum };
    updateData(dataAumentLike);
  };

  return (
    <>
      {data.map((el) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
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
              <CardContent className={classes.styleCardContent}>
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
                variant="contained"
              >
                Ver
              </Button>
              <div>
                <IconButton
                  onClick={() => increment(el)}
                  aria-label="add to favorites"
                >
                  <Badge badgeContent={el.likes} color="primary">
                    <FavoriteIcon color="error" />
                  </Badge>
                </IconButton>
                <IconButton aria-label="Copy">
                  <ContentCopyIcon color="action" />
                </IconButton>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls="long-menu"
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon color="primary" />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4,
                      width: "15ch",
                    },
                  }}
                >
                  <MenuItem divider onClick={handleClose}>
                    <Button
                      onClick={() => handleEdit(el)}
                      startIcon={<EditIcon color="primary" />}
                      size="small"
                      className={classes.label}
                    >
                      <Typography color="primary" component="p">
                        Editar
                      </Typography>
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button
                      onClick={() => deleteData(el.id)}
                      aria-label="delete"
                      startIcon={<DeleteIcon color="secondary" />}
                      className={classes.label}
                    >
                      <Typography color="secondary" component="p">
                        Eliminar
                      </Typography>
                    </Button>
                  </MenuItem>
                </Menu>
              </div>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default MediaCard;
