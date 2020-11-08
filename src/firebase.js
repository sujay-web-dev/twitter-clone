import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAjrDRvPQn-xTspBrRXg6Sy-JlQoyZYib8",
    authDomain: "twitter-sujay.firebaseapp.com",
    databaseURL: "https://twitter-sujay.firebaseio.com",
    projectId: "twitter-sujay",
    storageBucket: "twitter-sujay.appspot.com",
    messagingSenderId: "1076421199294",
    appId: "1:1076421199294:web:ef9d38c0524ac13d26e5ef",
    measurementId: "G-C6MSK13G76"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;