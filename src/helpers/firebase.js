import firebase from "firebase/app";
import "firebase/auth";

const FIREBASE_CONFIG = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "beer-collection.firebaseapp.com",
  databaseURL: "https://beer-collection.firebaseio.com",
  projectId: "beer-collection",
  storageBucket: "beer-collection.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const auth = firebase.auth();

export { auth, firebase };
