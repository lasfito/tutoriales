import React, { useState, useEffect, useRef } from "react";

import { AddCircle, CreditCard, Gif, EmojiEmotions } from "@material-ui/icons";
import EncabezadoChat from "../components/EncabezadoChat";
import Mensaje from "../components/Mensaje";

import firebaseApp from "../firebase/credenciales";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

function ChatScreen({ canalActivo, usuario }) {
  const [inputMensaje, setInputMensaje] = useState("");
  const [listaMensajes, setListaMensajes] = useState([]);

  const anchor = useRef();

  function filtrarContenido(textoOriginal) {
    const groserías = ["tonto", "hdp", "mk"];

    const array = textoOriginal.split(" ");
    array.forEach((palabra, index) => {
      if (groserías.includes(palabra)) {
        array[index] = "****";
      }
    });

    return array.join(" ");
  }

  function enviarMensaje(e) {
    e.preventDefault();
    const docuRef = doc(
      firestore,
      `canales/${canalActivo}/mensajes/${new Date().getTime()}`
    );

    const mensajeFiltrado = filtrarContenido(inputMensaje);

    setDoc(docuRef, {
      foto: usuario.photoURL,
      usuario: usuario.displayName,
      mensaje: mensajeFiltrado,
      id: new Date().getTime(),
    });

    setInputMensaje("");
    getListaMensajes();
    anchor.current.scrollIntoView({ behavior: "smooth" });
  }

  async function getListaMensajes() {
    const mensajesArr = [];

    const coleccionRef = collection(
      firestore,
      `canales/${canalActivo}/mensajes`
    );
    const mensajesJeroglificos = await getDocs(coleccionRef);
    mensajesJeroglificos.forEach((mensaje) => {
      mensajesArr.push(mensaje.data());
    });

    setListaMensajes([...mensajesArr]);
  }

  useEffect(() => {
    getListaMensajes();
  }, [canalActivo]);

  return (
    <div className="chat">
      <EncabezadoChat nombreCanal={canalActivo} />

      <div className="chat__messages">
        {listaMensajes
          ? listaMensajes.map((mensaje) => {
              return <Mensaje mensajeFirebase={mensaje} />;
            })
          : null}
        <div ref={anchor} style={{ marginBottom: "75px" }}></div>
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form onSubmit={enviarMensaje}>
          <input
            type="text"
            disabled={canalActivo ? false : true}
            value={inputMensaje}
            onChange={(e) => setInputMensaje(e.target.value)}
            placeholder={`Enviar mensaje a # ${canalActivo || ""}`}
          />
          <button
            disabled={canalActivo ? false : true}
            className="chat__inputButton"
            type="submit"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="chat__inputIcons">
          <CreditCard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
