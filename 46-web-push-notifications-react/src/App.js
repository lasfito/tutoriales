import React from "react";
import {getAuth, signInAnonymously} from "firebase/auth";
import {getToken, onMessage} from "firebase/messaging";
import {messaging} from "./firebase";

import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

const loguearse = ()=> {
signInAnonymously(getAuth()).then(usuario=> console.log(usuario));
 }


const activarMensajes = async ()=> {
  const token = await getToken(messaging,{
    vapidKey: "BBA399nsCorVkR4G0OIjtpDwt89lLiNb01pPfOQh0rwHnbb06r8x12uMNvJfVYTBBEPmbGRKF6HkUMmwuRSGU5w"
  }).catch(error => console.log("Tuviste un error al generar el token, papá"));


  if(token) console.log("tu token:",token);
  if(!token) console.log("no tienes token, rey");
}

React.useEffect(()=>{
onMessage(messaging, message=>{
  console.log("tu mensaje:", message);
  toast(message.notification.title);


})


}, []);

  return (
  <div> 
<h1>Wenas</h1>

<ToastContainer />
<button onClick={loguearse}> Loguearse</button>
<button
onClick={activarMensajes}
> Recibir noti</button>

  </div>
  );
}

export default App;
