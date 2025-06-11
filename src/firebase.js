import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQVwnLVLZegMZn75LvaIZVGLOK_QNc0EE",
  authDomain: "react-firebase-6f40e.firebaseapp.com",
  projectId: "react-firebase-6f40e",
  storageBucket: "react-firebase-6f40e.appspot.com",
  messagingSenderId: "754914494302",
  appId: "1:754914494302:web:077a6e02427bdd984d71cf",
  databaseURL: "https://react-firebase-6f40e-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
