import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  paper: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 300,
    backgroundColor: "#f44336",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    alignItems: "center",
    color: "white",
    borderRadius: "5px",
  },
}));

export default function SimpleModal({ open, setOpen }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(!open);
  };

  const body = (
    <div className={classes.paper}>
      <PlayArrowIcon />
      <h2 id="simple-modal-title">Video Agregado</h2>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
