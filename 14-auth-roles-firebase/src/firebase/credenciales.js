// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDtekL0PqqfDGGHxCNHDXfiLyYYL1jSU_k",
  authDomain: "tutoauthroles.firebaseapp.com",
  projectId: "tutoauthroles",
  storageBucket: "tutoauthroles.appspot.com",
  messagingSenderId: "336186669463",
  appId: "1:336186669463:web:29a38e4f884ca250f8acd2",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
