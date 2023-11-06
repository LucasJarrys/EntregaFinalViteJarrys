import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsH_8iUmv_e6wxg6LqeLIe1BwXVLrd2Eg",
  authDomain: "fb-47220final.firebaseapp.com",
  projectId: "fb-47220final",
  storageBucket: "fb-47220final.appspot.com",
  messagingSenderId: "672516625539",
  appId: "1:672516625539:web:6744aff431384e44f0b7b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
