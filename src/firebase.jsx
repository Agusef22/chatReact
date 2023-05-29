// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB1-5koHowkz-QkwFjyS1BeGtJw_6lgNJE",
	authDomain: "chatreact-2039b.firebaseapp.com",
	projectId: "chatreact-2039b",
	storageBucket: "chatreact-2039b.appspot.com",
	messagingSenderId: "33088198329",
	appId: "1:33088198329:web:d12f9ebf4dca5460dfad68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);