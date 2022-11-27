import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCl_-iAlHpr0b6Rlu-9PgYSjQ-YjYpkWcI",
  authDomain: "chat-app-91d98.firebaseapp.com",
  projectId: "chat-app-91d98",
  storageBucket: "chat-app-91d98.appspot.com",
  messagingSenderId: "635401223780",
  appId: "1:635401223780:web:d2e794a2370f42411c2971",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;
1;
export { projectAuth, projectFirestore, timestamp };
