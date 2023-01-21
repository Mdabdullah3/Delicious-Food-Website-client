
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHNDibfXhDla_2-RRSekg4HopdNL7qc00",

  authDomain: "delicious-food-website.firebaseapp.com",

  projectId: "delicious-food-website",

  storageBucket: "delicious-food-website.appspot.com",

  messagingSenderId: "560827704976",

  appId: "1:560827704976:web:4a1a2e6b0eeceaffd1da15",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
