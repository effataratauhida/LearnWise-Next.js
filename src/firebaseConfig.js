// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN_h63AZj8SnlTZvUDFbOW0YcnuxPE9NY",
  authDomain: "learnwise-bc916.firebaseapp.com",
  projectId: "learnwise-bc916",
  storageBucket: "learnwise-bc916.firebasestorage.app",
  messagingSenderId: "201015820552",
  appId: "1:201015820552:web:5fcee8d81951ee620dacbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();