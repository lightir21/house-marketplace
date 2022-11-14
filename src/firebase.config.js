import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBobbf70rTy38xncYZJqIxV5ATF-yx6Bbc",
  authDomain: "house-marketplace-app-cl-e3b9a.firebaseapp.com",
  projectId: "house-marketplace-app-cl-e3b9a",
  storageBucket: "house-marketplace-app-cl-e3b9a.appspot.com",
  messagingSenderId: "405117705061",
  appId: "1:405117705061:web:6c0226c1023ba558059f8c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
