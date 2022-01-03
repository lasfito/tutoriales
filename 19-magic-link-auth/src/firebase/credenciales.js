// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDcvnUHtCw1MQvbF1FjD0G18hG4O_TV0Vs",
  authDomain: "tutorial-auth-email.firebaseapp.com",
  projectId: "tutorial-auth-email",
  storageBucket: "tutorial-auth-email.appspot.com",
  messagingSenderId: "726514282710",
  appId: "1:726514282710:web:1948a6400a9d88a5cc1977",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
