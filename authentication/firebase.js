import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDk88Eo95b6C2GBbLEkmbUEODmcnJorCbs",
  authDomain: "sicsr-dissertation-pep.firebaseapp.com",
  databaseURL: "https://sicsr-dissertation-pep.firebaseio.com",
  projectId: "sicsr-dissertation-pep",
  storageBucket: "sicsr-dissertation-pep.appspot.com",
  messagingSenderId: "237240305407"
}

const Firebase = firebase.initializeApp(config);
export default Firebase;