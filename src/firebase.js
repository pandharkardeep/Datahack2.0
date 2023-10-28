// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxh2LtxFQznp-0UbPyxGSnIg7jQ4HSup4",
  authDomain: "tandrust-login.firebaseapp.com",
  projectId: "tandrust-login",
  storageBucket: "tandrust-login.appspot.com",
  messagingSenderId: "537647325782",
  appId: "1:537647325782:web:f0fa8e785d0a61a17211f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);