// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBUWZxdBZgt8ecYVNLFgxPym6irLO3e1EM",
  authDomain: "emailpasswordlogin-e3599.firebaseapp.com",
  projectId: "emailpasswordlogin-e3599",
  storageBucket: "emailpasswordlogin-e3599.appspot.com",
  messagingSenderId: "898943764531",
  appId: "1:898943764531:web:55ff89e2441ff6d01b3b46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
const db=getFirestore();
export {db}
