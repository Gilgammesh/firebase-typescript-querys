import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLsjD23Qsd6A-rpoueVUo-DkG1BqpwDFI",
  authDomain: "sql-demos-cd652.firebaseapp.com",
  databaseURL: "https://sql-demos-cd652-default-rtdb.firebaseio.com",
  projectId: "sql-demos-cd652",
  storageBucket: "sql-demos-cd652.appspot.com",
  messagingSenderId: "719309795314",
  appId: "1:719309795314:web:c3f6726c5b2655002a056b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Instanciamos FireStore
const db = firebase.firestore();

export default db;
