import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const app = firebase.initializeApp({
  projectId: "fb-auth-tutorial-2f164",
  appId: "1:802556503334:web:cba5a927f71ed9b5d9cde7",
  storageBucket: "fb-auth-tutorial-2f164.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyCsVeUq48zyoA0RrZj-fPHS-teoDyEOlGY",
  authDomain: "fb-auth-tutorial-2f164.firebaseapp.com",
  messagingSenderId: "802556503334",
});
