import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-igyzVwdH_4JtIr64TtHSfYx1Mw8UfZM",
  authDomain: "sanghx-foods.firebaseapp.com",
  projectId: "sanghx-foods",
  storageBucket: "sanghx-foods.firebasestorage.app",
  messagingSenderId: "491353757911",
  appId: "1:491353757911:web:40752459b5b0049c71f892"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;