import React, { useEffect } from "react";
import { app } from "./fb";
import Home from "./Home";
import Logueo from "./Logueo";

function App() {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesión iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });
  }, []);

  return <>{usuario ? <Home /> : <Logueo setUsuario={setUsuario} />}</>;
}

export default App;
