import firebaseApp from "../firebase/credenciales";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
const auth = getAuth(firebaseApp);

function enviarEnlaceLogin(correo) {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    url: "http://localhost:3000/login-url",

    handleCodeInApp: true,
    // iOS: {
    //   bundleId: "com.example.ios"
    // },
    // android: {
    //   packageName: "com.example.android",
    //   installApp: true,
    //   minimumVersion: "12"
    // },
  };

  sendSignInLinkToEmail(auth, correo, actionCodeSettings)
    .then((response) => {
      console.log("éxito", response);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

export default enviarEnlaceLogin;
