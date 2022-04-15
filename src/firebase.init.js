// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNYdLHyRWMm88I3c-x4gqyAIdv1Io2y9g",
  authDomain: "red-onion-b040e.firebaseapp.com",
  projectId: "red-onion-b040e",
  storageBucket: "red-onion-b040e.appspot.com",
  messagingSenderId: "94187080209",
  appId: "1:94187080209:web:5bff49f9ec9a860bb9bfb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
