// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBG3f7nNTF93pt1jDEJtzYjNebmHLx9FXQ",
  authDomain: "quasarproject.firebaseapp.com",
  databaseURL: "https://quasarproject.firebaseio.com",
  projectId: "quasarproject",
  storageBucket: "quasarproject.appspot.com",
  messagingSenderId: "980021342191",
  appId: "1:980021342191:web:da75a37c1486083fcb901a"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseFirestore = firebaseApp.firestore();
let firebaseStorage = firebaseApp.storage();

export { firebaseAuth, firebaseFirestore, firebaseStorage}


