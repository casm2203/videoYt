import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./NavBar";
import NavLite from "./NavLite";
import { helpHttp } from "../helpers/helpHttp";
import Message from "../pages/Message";
import Error404 from "../pages/Error404";
import Nosotros from "./Nosotros";
import CardYtSkeleton from "./Yt/CardYtSkeleton";
//UI
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
//componentes de Yt
import TableYt from "./Yt/TableYt";
import FormYt from "./Yt/FormYt";
import CardYt from "./Yt/CardYt";
import ViewYt from "./Yt/ViewYt";
import FormContactYt from "./Yt/FormContactYt";
import ViewGridListYt from "./Yt/ViewGridListYt";
//Firebase
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import db from "../firebaseyt/firebaseConfig";

const useStyles = makeStyles((theme) => ({
  gridItems: {
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
  const [dbs, setDbs] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [dataToView, setDataToView] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [views, setViews] = useState(false);
  const [color] = useState("red");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  let api = helpHttp(),
    urlForm = "https://formsubmit.co/ajax/casm2203@gmail.com";

  useEffect(() => {
    const q = query(collection(db, "videos"));
    // eslint-disable-next-line
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arrayDatas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDbs(arrayDatas);
      setLoading(true);
    });
  }, []);

  const createData = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "videos"), data);
      setDbs([...dbs, { ...data, id: docRef.id }]);
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
      {matches ? <Navbar /> : <NavLite />}
      <Switch>
        <Route exact path="/">
          {error && (
            // <Error404 />
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor={color}
            />
          )}
          <ViewGridListYt handleView={handleView} />
          {loading ? (
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
                      updateData={updateData}
                    />
                  </Grid>
                ))}
            </Grid>
          ) : (
            <CardYtSkeleton />
          )}
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
