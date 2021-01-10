// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDTqxvhksaylyK1MIUJ_jcmEKkkjVt0VJE",
    authDomain: "hulkweb--clone.firebaseapp.com",
    projectId: "hulkweb--clone",
    storageBucket: "hulkweb--clone.appspot.com",
    messagingSenderId: "106884248328",
    appId: "1:106884248328:web:d15d6222d22f06d4d6f2bd",
    measurementId: "G-MJ115X06QC"
  };
  const firebaseapp= firebase.initializeApp(firebaseConfig);
 const db=firebaseapp.firestore();
   const auth=firebase.auth();
   export {auth}
   export default db;
   
