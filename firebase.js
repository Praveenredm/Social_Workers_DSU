// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNo6amuudouz1Z-J6aQAjgYr08JSSvjxw",
  authDomain: "ainote2-f9f0a.firebaseapp.com",
  projectId: "ainote2-f9f0a",
  storageBucket: "ainote2-f9f0a.firebasestorage.app",
  messagingSenderId: "783884531832",
  appId: "1:783884531832:web:5e89899300681ef465158d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
