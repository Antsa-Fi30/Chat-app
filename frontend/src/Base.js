// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3iPC6SJ2506XpJ1mKieNPuVchgCHkC4k",
  authDomain: "chat-app-17793.firebaseapp.com",
  databaseURL: "https://chat-app-17793-default-rtdb.firebaseio.com",
  projectId: "chat-app-17793",
  storageBucket: "chat-app-17793.appspot.com",
  messagingSenderId: "540884544239",
  appId: "1:540884544239:web:c63e10b01410c1e3c6c91a",
  measurementId: "G-35X1VNNKVK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
