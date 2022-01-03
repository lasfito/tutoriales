import firebaseApp from "../firebase/credenciales";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
const auth = getAuth(firebaseApp);

export default function atraparInicioSesion(url) {
  if (isSignInWithEmailLink(auth, url)) {
    const correoRegistro = window.localStorage.getItem("correo");

    signInWithEmailLink(auth, correoRegistro, url)
      .then((result) => {
        console.log("éxito", result);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log("error", error);
      });
  } else {
    console.log("no es un enlace de inicio de sesión");
  }
}
