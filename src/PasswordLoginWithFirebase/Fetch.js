// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore';
 //import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR22rh888RVkOO36qTbELzJ6VbOxgQ4lE",
  authDomain: "test-ffa1b.firebaseapp.com",
  projectId: "test-ffa1b",
  storageBucket: "test-ffa1b.appspot.com",
  messagingSenderId: "254917301925",
  appId: "1:254917301925:web:5439402272c2101b591f4c",
  measurementId: "G-GFFJ8JJVYQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
 export default app;

 const db=getFirestore();
 export { db };