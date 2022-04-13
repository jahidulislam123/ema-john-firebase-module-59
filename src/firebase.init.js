// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-jUyhLaXUKvJkDoY8PuSJqkytVgbUXUE",
  authDomain: "ema-john-simple-62641.firebaseapp.com",
  projectId: "ema-john-simple-62641",
  storageBucket: "ema-john-simple-62641.appspot.com",
  messagingSenderId: "535106679340",
  appId: "1:535106679340:web:ddd5f3d3c4cd3070b49789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);
export default auth;