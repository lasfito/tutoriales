import React from 'react';
import './App.css';
import {app} from "./fb"

function App() {

  const [archivoUrl, setArchivoUrl] = React.useState("");
  const [docus,setDocus] = React.useState([]);

  const archivoHandler = async (e)=> {

    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    console.log("archivo cargado:",archivo.name);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);

  }

  const submitHandler = async (e)=> {
    e.preventDefault()
const nombreArchivo = e.target.nombre.value;
if (!nombreArchivo) {
  alert("coloca un nombre")
  return
}
const coleccionRef =  app.firestore().collection("archivos");
const docu = await coleccionRef.doc(nombreArchivo).set({nombre: nombreArchivo, url: archivoUrl});
console.log("archivo cargado:", nombreArchivo, "ulr:", archivoUrl);
window.location="/"

  }

  React.useEffect(async ()=>{
    const docusList = await app.firestore().collection("archivos").get();
    setDocus(docusList.docs.map((doc)=> doc.data()));
   
  }, [])

  return (
    <>
    <form onSubmit={submitHandler}  >
      <input type="file" onChange={archivoHandler} />
      <input type="text" name="nombre" placeholder="nombra tu archivo" />
      <button>Enviar </button>
       </form>
       <ul>
         {docus.map((doc)=> <li><h3>{doc.nombre}</h3><img src={doc.url} height="100px" width="100px" /></li>)}
       </ul>
    </>
  );
}

export default App;
