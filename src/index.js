import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';


// const firebase = require('firebase');
// require('firebase/firestore');

const firebaseConfig={
  apiKey: "AIzaSyB_BgAHfsVR0M_U1zV8eUElYR4IjVro3Wk",
  authDomain: "ever-note-clone-f4268.firebaseapp.com",
  projectId: "ever-note-clone-f4268",
  storageBucket: "ever-note-clone-f4268.appspot.com",
  messagingSenderId: "112525290856",
  appId: "1:112525290856:web:afc8d99b55d3aebef17add",
  measurementId: "G-58FBBKXVFL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  

ReactDOM.render(
   <App />,
  document.getElementById("evernote-container")
);


// reportWebVitals();