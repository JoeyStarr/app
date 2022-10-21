// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtjuvC4y-0hVTSDmqtePEIlTAddM_Ns4c",
  authDomain: "serre-13d47.firebaseapp.com",
  projectId: "serre-13d47",
  storageBucket: "serre-13d47.appspot.com",
  messagingSenderId: "862615913260",
  appId: "1:862615913260:web:472ec8e650e380cf7a2289"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage }

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA91Sg_2ceF4m6xn1w2q6PIRddSTZUXmb0",
  authDomain: "serreson.firebaseapp.com",
  projectId: "serreson",
  storageBucket: "serreson.appspot.com",
  messagingSenderId: "577054254080",
  appId: "1:577054254080:web:edc6d865a8cfe3d53224e5",
  measurementId: "G-FH2405Z003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }

*/

/*



*/