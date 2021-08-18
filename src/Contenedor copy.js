import React, { useState, useEffect } from "react";
import FormYt from "./components/FormYt";
import TableYt from "./components/TableYt";
import { helpHttp } from "./helpers/helpHttp";
import CardYt from "./components/CardYt";
import Loader from "./components/Loader";
import Message from "./components/Message";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridOnIcon from "@material-ui/icons/GridOn";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import IconButton from "@material-ui/core/IconButton";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  gridItems: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  views: {
    display: "flex",
    width: "80%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridView: {
    width: "98%",
    margin: "auto",
  },
}));

const Contenedor = () => {
  const classes = useStyles();
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState(true);

  let api = helpHttp(),
    url = "http://localhost:5000/videos";
  //cuando utilizas el la variable api te la va a pedir en el useEfect porque es algo que estás utilizando
  //si la colocas dentro del array del useEffect vas a provocar un loop infinito y BOM!
  // una solución es quitar la variable api y utilizar directamente el helpHttp() en el useEfect

  useEffect(() => {
    api.get(url).then((res) => {
      setLoading(true);
      //Nconsole.log(res)
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
        setError(null);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("estás seguro de eliminar el registro?");
    if (isDelete) {
      let options = {
        headers: { "content-type": "application/json" },
      };
      let endpoint = `${url}/${id}`;
      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => (el.id === id ? null : el));
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  const handleView = () => {
    setViews(!views);
  };
  return (
    <>
      <Grid container>
        <Grid className={classes.gridItems} item xs={12}>
          <FormYt
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </Grid>
        <br />
        <br />
        {loading && (
          <Grid className={classes.gridItems} item xs={12}>
            <Loader />
          </Grid>
        )}
        {error && (
          <Grid className={classes.gridItems} item xs={12}>
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            />
          </Grid>
        )}

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

        {db &&
          (views ? (
            <TableYt
              data={db}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ) : (
            <Grid
              className={classes.gridView}
              justify="flex-start"
              container
              spacing={2}
            >
              <CardYt data={db} />
              {/*<Grid item xs={6} sm={6} md={4} lg={3} xl={2}></Grid>*/}
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Contenedor;
