import firebase from 'firebase/compat/app';
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFrMzKrKR2jCUqinfM5MnsguAJIyKKuoA",
    authDomain: "clone-2d7ec.firebaseapp.com",
    projectId: "clone-2d7ec",
    storageBucket: "clone-2d7ec.appspot.com",
    messagingSenderId: "191753454698",
    appId: "1:191753454698:web:42d2beb45568b74bd17613",
    measurementId: "G-EDDRFRBYX4"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()