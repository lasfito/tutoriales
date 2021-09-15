import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/firestore"



export const app = firebase.initializeApp({
    "projectId": "fir-storage-lasfito",
    "appId": "1:713168404204:web:b359856ef667ac2287efc9",
    "storageBucket": "fir-storage-lasfito.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDj2SX0BXqftSsEjSw1JYz-xEiOaqdKAF8",
    "authDomain": "fir-storage-lasfito.firebaseapp.com",
    "messagingSenderId": "713168404204"
  });