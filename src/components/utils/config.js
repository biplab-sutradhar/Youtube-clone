import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getStorage } from "firebase-storage";
const firebaseConfig = {
  apiKey: "AIzaSyCCKCjWU7LKPOiyt15j2SbpkHBfM7nSAyo",
  authDomain: "fir-1cffc.firebaseapp.com",
  projectId: "fir-1cffc",
  storageBucket: "fir-1cffc.appspot.com",
  messagingSenderId: "93495635026",
  appId: "1:93495635026:web:0c05e07403e217f56b838b",
  measurementId: "G-DV14FJ8P5C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app)
export {auth, provider, storage}