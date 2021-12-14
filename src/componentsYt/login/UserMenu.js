import React, { useState } from "react";
import { connect } from "react-redux";
import { updateSesion } from "./../../redux/actions/sesionAction";
import { NavLink } from "react-router-dom";
//Firebase
import { auth } from "./../../firebaseyt/firebaseConfig";
import { signOut } from "firebase/auth";
//UI
import { makeStyles } from "@material-ui/core/styles";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import LoginStyles from "../Style/StylesYt";

const useStyles = makeStyles(LoginStyles);

const UserMenu = ({ sesionActiva, updateSesion }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    handleClose();
    signOut(auth)
      .then(() => {
        updateSesion({});
      })
      .catch((error) => {});
  };

  return (
    <>
      {/* Perfil */}
      <Button
        onClick={handleClick}
        sx={{
          borderColor: "white",
          color: "white",
          ":hover": "white",
          marginX: "5px",
        }}
        variant="outlined"
        color="inherit"
        startIcon={<PersonIcon />}
      >
        {sesionActiva.email ? `Hola, ${sesionActiva.displayName}` : "Perfil"}
      </Button>

      {/* Menu */}
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
            maxHeight: 60 * 4.5,
            width: "120",
          },
        }}
      >
        {/* iniciar sesion */}
        <NavLink
          exact
          className={classes.link}
          onClick={handleClose}
          to="/iniciarSesion"
        >
          <MenuItem divider>
            <ListItemIcon className={classes.link}>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Iniciar sesion</ListItemText>
          </MenuItem>
        </NavLink>

        {/* Registro */}
        <NavLink
          exact
          className={classes.link}
          onClick={handleClose}
          to="/registrarme"
        >
          <MenuItem divider>
            <ListItemIcon className={classes.link}>
              <PersonAddIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Registrarme</ListItemText>
          </MenuItem>
        </NavLink>

        {/* Cerrar sesion */}
        {sesionActiva.email && (
          <NavLink
            exact
            className={classes.link}
            to="/"
            onClick={() => logOut()}
          >
            <MenuItem>
              <ListItemIcon className={classes.link}>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cerrar sesion</ListItemText>
            </MenuItem>
          </NavLink>
        )}
      </Menu>
    </>
  );
};
//Redux State
const mapStateToProps = (state) => {
  return {
    sesionActiva: state.sesion.sesionActiva,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSesion: (sesion) => dispatch(updateSesion(sesion)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
