// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo0KmcDayOu8FI1FaVGiiIPs7CcR8CDvg",
  authDomain: "jayeehallhotel.firebaseapp.com",
  projectId: "jayeehallhotel",
  storageBucket: "jayeehallhotel.appspot.com",
  messagingSenderId: "496972419156",
  appId: "1:496972419156:web:83bc4cd30c403663119dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
