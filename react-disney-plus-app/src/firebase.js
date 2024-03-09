// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgS8jInM-3VF5qiTh5v_3irea95KonEIc",
  authDomain: "react-disney-plus-app-b8edb.firebaseapp.com",
  projectId: "react-disney-plus-app-b8edb",
  storageBucket: "react-disney-plus-app-b8edb.appspot.com",
  messagingSenderId: "30090346707",
  appId: "1:30090346707:web:cc3b8ac96b784fe269d426"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;