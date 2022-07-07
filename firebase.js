// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0d2Y5PklgTynlsQE5zgYB37sqFHKD2S0",
  authDomain: "happycooking-db.firebaseapp.com",
  databaseURL: "https://happycooking-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "happycooking-db",
  storageBucket: "happycooking-db.appspot.com",
  messagingSenderId: "399581807196",
  appId: "1:399581807196:web:3c354c869238d7b9651c99",
  measurementId: "G-XCTL06HPS7"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
} else{
    app = firebase.app()
}

const auth = firebase.app()

export {auth};