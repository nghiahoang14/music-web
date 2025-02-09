// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAGNvocID5kakQ7--Q7WvLIgtDUoQViho",
  authDomain: "project-5-fd55f.firebaseapp.com",
  databaseURL: "https://project-5-fd55f-default-rtdb.firebaseio.com",
  projectId: "project-5-fd55f",
  storageBucket: "project-5-fd55f.firebasestorage.app",
  messagingSenderId: "824939297915",
  appId: "1:824939297915:web:fadd5ca7db3c7c719176de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const dbFirebase  = getDatabase(app);
 export const authFirebase=getAuth(app);