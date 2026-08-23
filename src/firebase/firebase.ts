// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeW1zfTVOpiTasaEquNaqufo6UTuNYSOA",
  authDomain: "context-based-todo.firebaseapp.com",
  projectId: "context-based-todo",
  storageBucket: "context-based-todo.firebasestorage.app",
  messagingSenderId: "54341318440",
  appId: "1:54341318440:web:27ae6fc72d6481afdbc21d",
  measurementId: "G-NS7H36R5WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()