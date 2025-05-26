// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNXs6rufmEstbBJMVfowpt_GCoyKFIeck",
  authDomain: "citic-capital.firebaseapp.com",
  projectId: "citic-capital",
  storageBucket: "citic-capital.firebasestorage.app",
  messagingSenderId: "222807307108",
  appId: "1:222807307108:web:495c75f53e993f030f8071",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
