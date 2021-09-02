

import firebase from "firebase/app";
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyAl88zZzsxBtAz_gApvJPuz-GZF8cR4WoI",
    authDomain: "react-animales-florens.firebaseapp.com",
    projectId: "react-animales-florens",
    storageBucket: "react-animales-florens.appspot.com",
    messagingSenderId: "122223309538",
    appId: "1:122223309538:web:e7dc714d0702630ea0a4bb"
  };
const app = firebase.initializeApp(firebaseConfig);
export const getFirestore = () => {
  return firebase.firestore(app);
}

export const database = firebase.firestore();


