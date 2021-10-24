import React, { useState, useEffect } from "react";

import { Avatar } from "@material-ui/core";
import { ExpandMore, Add, Mic, Settings, Headset } from "@material-ui/icons";

import CanalEnSidebar from "../components/CanalEnSidebar";

import firebaseApp from "../firebase/credenciales";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

function Sidebar({ usuarioGlobal, setCanalActivo }) {
  const [listaCanales, setListaCanales] = useState([]);

  async function getCanales() {
    const canalesArr = [];
    const collectionRef = collection(firestore, "canales");
    const canalesCifrados = await getDocs(collectionRef);
    canalesCifrados.forEach((canalCifrado) => {
      canalesArr.push(canalCifrado.data());
    });

    setListaCanales(canalesArr);
  }

  function agregarCanal() {
    const nombreCanal = prompt("¿Cuál es el nombre del canal?");
    if (nombreCanal) {
      const docuRef = doc(firestore, `canales/${nombreCanal}`);
      setDoc(docuRef, {
        id: new Date().getTime(),
        nombre: nombreCanal,
      });

      getCanales();
    }
  }

  useEffect(() => {
    getCanales();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3> Servidor de Lasfito</h3>
        <ExpandMore />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMore />
            <h4>Canales de texto</h4>
          </div>

          <Add className="sidebar__addChannel" onClick={agregarCanal} />
        </div>

        <div className="sidebar__channelsList">
          {listaCanales
            ? listaCanales.map((canal) => {
                return (
                  <div onClick={() => setCanalActivo(canal.nombre)}>
                    <CanalEnSidebar nombre={canal.nombre} id={canal.id} />
                  </div>
                );
              })
            : null}
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src={usuarioGlobal.photoURL} />
        <div className="sidebar__profileInfo">
          <h3>{usuarioGlobal.displayName}</h3>
          <p>{usuarioGlobal.uid.substring(0, 4)} </p>
        </div>
        <div className="sidebar__profileIcons">
          <Mic />
          <Headset />
          <Settings onClick={() => signOut(auth)} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
