import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config= {
    apiKey: "AIzaSyDo_LTZHp0QwpzXBpNctaZL3AIM0_RJvoI",
    authDomain: "style-shop-db.firebaseapp.com",
    databaseURL: "https://style-shop-db.firebaseio.com",
    projectId: "style-shop-db",
    storageBucket: "style-shop-db.appspot.com",
    messagingSenderId: "986039959679",
    appId: "1:986039959679:web:b910856c934bc1be837f4a",
    measurementId: "G-PJMVSQXYE6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt':'select_account'})
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
  
  export default firebase;