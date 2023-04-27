import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpUx8NJ3y7hFF32hIcRWR4LBZvwLQ1IW0",
  authDomain: "ordering-8320b.firebaseapp.com",
  projectId: "ordering-8320b",
  storageBucket: "ordering-8320b.appspot.com",
  messagingSenderId: "565437210158",
  appId: "1:565437210158:web:17c09f9239cd1d4cd389bf",
  measurementId: "G-YE49KE7SLM",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = firebase.auth();
export { firebase, auth };
