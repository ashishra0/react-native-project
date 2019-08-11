import firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "sicsr-dissertation-pep.firebaseapp.com",
  databaseURL: "https://sicsr-dissertation-pep.firebaseio.com",
  projectId: "sicsr-dissertation-pep",
  storageBucket: "sicsr-dissertation-pep.appspot.com",
  messagingSenderId: ""
}

const Firebase = firebase.initializeApp(config);
export default Firebase;