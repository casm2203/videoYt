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
import {
  collection,
  //getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import db from "./firebaseyt/firebaseConfig";

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
const Contenedor = ({ modo, setModo }) => {
  const classes = useStyles();
  const [dbs, setDbs] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [dataToView, setDataToView] = useState(null);
  const [error, setError] = useState(null);
  const [loading] = useState(false);
  const [views, setViews] = useState(false);

  let api = helpHttp(),
    urlForm = "https://formsubmit.co/ajax/casm2203@gmail.com";

  //cuando utilizas el la variable api te la va a pedir en el useEfect porque es algo que estás utilizando
  //si la colocas dentro del array del useEffect vas a provocar un loop infinito y BOM!
  // una solución es quitar la variable api y utilizar directamente el helpHttp() en el useEfect

  useEffect(() => {
    // const obtenerDatos = async () => {
    //   try {
    //     const datos = await getDocs(collection(db, "videos"));
    //     const arrayData = datos.docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id,
    //     }));
    //     console.log(arrayData);
    //     setDbs(arrayData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // obtenerDatos();

    const q = query(collection(db, "videos"));
    // eslint-disable-next-line
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arrayDatas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(arrayDatas, "datas");
      setDbs(arrayDatas);
    });
  }, []);

  const createData = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "videos"), data);
      // video = { ...data, id: docRef.id };
      //await updateDoc(doc(db, "videos", video.id), video);
      console.log("Document written with ID: ", docRef.id);
      setDbs([...dbs, data]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const updateData = async (data) => {
    try {
      const updateVideo = doc(db, "videos", data.id);
      await updateDoc(updateVideo, data);
      let newData = dbs.map((el) => (el.id === data.id ? data : el));
      setDbs(newData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "videos", id));
      let newData = dbs.filter((el) => (el.id === id ? null : el));
      setDbs(newData);
    } catch (e) {
      console.error("Error adding document: ", e);
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
      <Navbar modo={modo} setModo={setModo} />
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
            {dbs &&
              (views ? (
                <Grid
                  className={classes.gridView}
                  justify="flex-start"
                  container
                  spacing={2}
                >
                  <TableYt
                    data={dbs}
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
                    data={dbs}
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
