import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLNGNWfJvaLm36bti8UHU3lcZnobTbvQw",
    authDomain: "catch-of-the-day-ciara.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ciara.firebaseio.com"
  })
  
const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp}

export default base;