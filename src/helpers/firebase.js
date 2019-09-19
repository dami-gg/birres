import firebase from "firebase/app";
import "firebase/auth";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAxomPcdjUYjos_6-Vcjj07sazCVpoQBHE",
  authDomain: "beer-collection.firebaseapp.com",
  databaseURL: "https://beer-collection.firebaseio.com",
  projectId: "beer-collection",
  storageBucket: "beer-collection.appspot.com",
  messagingSenderId: "549305960758"
};

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const auth = firebase.auth();

export { auth, firebase };
