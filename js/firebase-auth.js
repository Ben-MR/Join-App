// Firebase-Auth importieren
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

// Firebase config
 const firebaseConfig = {
    apiKey: "AIzaSyDvFU0EGlyUPvCxL2tnKGJ60VIp2ieYkLc",
    authDomain: "join-f.firebaseapp.com",
    databaseURL: "https://join-f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "join-f",
    storageBucket: "join-f.firebasestorage.app",
    messagingSenderId: "536820413164",
    appId: "1:536820413164:web:68507a2d6b818f0ba66bc9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Anonym anmelden
const auth = getAuth(app);
signInAnonymously(auth)
  .then(() => {
    console.log("✅ Anonymer Login erfolgreich!");
  })
  .catch((error) => {
    console.error("❌ Fehler beim anonymen Login:", error.code, error.message);
  });