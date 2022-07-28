// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhGWN1k_OTsp8XdzsYMpl_BmG9Vkcn090",
  authDomain: "gettingstartedwithfireba-71167.firebaseapp.com",
  projectId: "gettingstartedwithfireba-71167",
  storageBucket: "gettingstartedwithfireba-71167.appspot.com",
  messagingSenderId: "206782460433",
  appId: "1:206782460433:web:47e1589d682d1eb4ecf7b0",
  measurementId: "G-BQZRWL9YJ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);
