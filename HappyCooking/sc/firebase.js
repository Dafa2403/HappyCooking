import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB0d2Y5PklgTynlsQE5zgYB37sqFHKD2S0",
    authDomain: "happycooking-db.firebaseapp.com",
    databaseURL: "https://happycooking-db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "happycooking-db",
    storageBucket: "happycooking-db.appspot.com",
    messagingSenderId: "399581807196",
    appId: "1:399581807196:web:94236b5182222d16651c99",
    measurementId: "G-7EEF1S1YBN"
  };

  // Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app();
}

export default firebase;