// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import dotenv from "dotenv"
dotenv.config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "context-based-todo.firebaseapp.com",
  projectId: "context-based-todo",
  storageBucket: "context-based-todo.firebasestorage.app",
  messagingSenderId: "54341318440",
  appId: process.env.APP_ID,
  measurementId: "G-NS7H36R5WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()