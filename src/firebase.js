import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyC2vIn9FCInKWmAEn9l3fEZ2y1C3aM1UDQ",
  authDomain: "to-do-cce95.firebaseapp.com",
  projectId: "to-do-cce95",
  storageBucket: "to-do-cce95.appspot.com",
  messagingSenderId: "481393579059",
  appId: "1:481393579059:web:a12c97d406230af30fbf46",
  measurementId: "G-G8VVEP5TSQ",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase
