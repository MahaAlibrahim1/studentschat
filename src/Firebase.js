import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import  "firebase/storage" ;


var firebaseConfig = {
  apiKey: "AIzaSyAnm5x9FHiCIgln9EkqbCi4sTJyOIAIGd8",
  authDomain: "react-slack-clone-835e5.firebaseapp.com",
  projectId: "react-slack-clone-835e5",
  storageBucket: "react-slack-clone-835e5.appspot.com",
  messagingSenderId: "193761596778",
  appId: "1:193761596778:web:6e389648d1bcae30e98113"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase ;