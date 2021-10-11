// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa7JJp5agQfKyzSXiqWKp_on9Wz-VClDI",
  authDomain: "tutorial-09-sdk.firebaseapp.com",
  projectId: "tutorial-09-sdk",
  storageBucket: "tutorial-09-sdk.appspot.com",
  messagingSenderId: "742939267055",
  appId: "1:742939267055:web:324115291b1f88fdf6701a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
