import React, { useState, useEffect } from "react";
import FormYt from "./components/FormYt";
import TableYt from "./components/TableYt";
import { helpHttp } from "./helpers/helpHttp";
import CardYt from "./components/CardYt";
import Loader from "./components/Loader";
import Message from "./components/Message";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/NavBar";
import { HashRouter, Route, Switch } from "react-router-dom";
import Error404 from "./pages/Error404";
import ViewYt from "./components/ViewYt";
import Nosotros from "./components/Nosotros";
import FormContactYt from "./components/FormContactYt";
import ViewGridListYt from "./components/ViewGridListYt";

const useStyles = makeStyles((theme) => ({
  gridItems: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gridView: {
    width: "98%",
    margin: "auto",
  },
  nacbir: {
    marginBottom: "50px",
  },
}));

const Contenedor = () => {
  const classes = useStyles();
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [dataToView, setDataToView] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState(false);

  let api = helpHttp(),
    url = "http://localhost:5000/videos",
    urlForm = "https://formsubmit.co/ajax/casm2203@gmail.com";
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

  const sendFormContact = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(urlForm, options).then((res) => {
      if (!res.err) {
        setError(null);
      } else {
        setError(res);
      }
    });
  };
  return (
    <HashRouter basename="videos">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ViewGridListYt handleView={handleView} />
          {loading && <Loader />}
          {error && (
            // <Error404 />
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="red"
            />
          )}
          <Grid container>
            {db &&
              (views ? (
                <Grid
                  className={classes.gridView}
                  justify="flex-start"
                  container
                  spacing={2}
                >
                  <TableYt
                    data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    setDataToView={setDataToView}
                  />
                </Grid>
              ) : (
                <Grid
                  className={classes.gridView}
                  justify="flex-start"
                  container
                  spacing={2}
                >
                  <CardYt
                    data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    setDataToView={setDataToView}
                  />
                </Grid>
              ))}
          </Grid>
        </Route>

        <Route exact path="/agregar">
          <FormYt
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </Route>
        <Route exact path="/:id/editar">
          <FormYt
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
        </Route>
        <Route exact path="/:id/ver">
          <ViewYt dataToView={dataToView} />
        </Route>
        <Route exact path="/nosotros">
          <Nosotros />
        </Route>
        <Route exact path="/contactame">
          <FormContactYt sendFormContact={sendFormContact} />
        </Route>
        <Route path="*" children={<Error404 />} />
      </Switch>
    </HashRouter>
  );
};

export default Contenedor;