// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhRkt67oDhIa2D-N5liPY4oS7evH5Q2Nw",
  authDomain: "event-plan-534f3.firebaseapp.com",
  projectId: "event-plan-534f3",
  storageBucket: "event-plan-534f3.appspot.com",
  messagingSenderId: "450121103699",
  appId: "1:450121103699:web:e3da97b2957e8ca170c9a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;