// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCbf_ZYj8KfwjtX980pFq5E8cSjfvSfOOE",
    authDomain: "eco-move-fae83.firebaseapp.com",
    projectId: "eco-move-fae83",
    storageBucket: "eco-move-fae83.firebasestorage.app",
    messagingSenderId: "901221988131",
    appId: "1:901221988131:web:64a9afd2cb1389e0a0fe96"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
