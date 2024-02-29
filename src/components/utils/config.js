import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getStorage } from "firebase-storage";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "fir-1cffc.firebaseapp.com",
  projectId: "fir-1cffc",
  storageBucket: "fir-1cffc.appspot.com",
  messagingSenderId: "93495635026",
  appId: "1:93495635026:web:...",
  measurementId: "G-...."
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app)
export {auth, provider, storage}
