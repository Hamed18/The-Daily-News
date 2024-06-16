// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCYTMOblOMSjoe-ljSQ2kYs0n97sXYZic",
  authDomain: "the-daily-news-793e3.firebaseapp.com",
  projectId: "the-daily-news-793e3",
  storageBucket: "the-daily-news-793e3.appspot.com",
  messagingSenderId: "312298827431",
  appId: "1:312298827431:web:70204a161a19b6b9c67582"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;