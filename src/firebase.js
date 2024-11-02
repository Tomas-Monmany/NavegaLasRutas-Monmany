import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFDHK1bLgrip6Hq2zaFZpqxAX4hDOOiuo",
  authDomain: "arnold-ecommerce.firebaseapp.com",
  projectId: "arnold-ecommerce",
  storageBucket: "arnold-ecommerce.firebasestorage.app",
  messagingSenderId: "976220461136",
  appId: "1:976220461136:web:473326356dabb282a41955",
  measurementId: "G-TFBM434HW0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
