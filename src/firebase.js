// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAfUp_p0b3bgWBhooENkt8Aj_xzVcfidas",
    authDomain: "twitter-clone-b7a2b.firebaseapp.com",
    projectId: "twitter-clone-b7a2b",
    storageBucket: "twitter-clone-b7a2b.appspot.com",
    messagingSenderId: "974715407758",
    appId: "1:974715407758:web:fe5632540d8332b088a8df",
    measurementId: "G-6R7PKY2ZKY"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
   const db=firebaseApp.firestore();
   export default db;