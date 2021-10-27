import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "red",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 800,
  },
  content: {
    width: "80%",
    margin: "auto",
  },
}));

const TableYt = ({ data, setDataToEdit, deleteData, setDataToView }) => {
  const classes = useStyles();
  let history = useHistory();

  const handleEdit = (el) => {
    setDataToEdit(el);
    history.push(`/${el.id}/editar`);
  };

  const handleView = (el) => {
    setDataToView(el);
    history.push(`/${el.id}/ver`);
  };

  return (
    <TableContainer className={classes.content} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>Id </StyledTableCell> */}
            <StyledTableCell align="center">Nombre del video</StyledTableCell>
            <StyledTableCell align="center">Descripcion</StyledTableCell>
            <StyledTableCell align="center">Enlace</StyledTableCell>
            <StyledTableCell align="center">Accion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((el) => (
            <StyledTableRow key={el.id}>
              {/* <StyledTableCell component="th" scope="row">
                {el.id}
              </StyledTableCell> */}
              <StyledTableCell align="center">{el.name}</StyledTableCell>
              <StyledTableCell align="center">{el.descripcion}</StyledTableCell>
              <StyledTableCell align="center">{el.enlace}</StyledTableCell>
              <StyledTableCell align="center">
                <ButtonGroup variant="contained" color="primary">
                  <IconButton onClick={() => handleView(el)} aria-label="view">
                    <VisibilityIcon className={classes.view} color="action" />
                  </IconButton>
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
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableYt;
