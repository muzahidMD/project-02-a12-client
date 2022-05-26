// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5vM0G3KHCrMk8m6Fkt6VYx8VNmxRSiT0",
    authDomain: "baker-manufacturer-website.firebaseapp.com",
    projectId: "baker-manufacturer-website",
    storageBucket: "baker-manufacturer-website.appspot.com",
    messagingSenderId: "733420976623",
    appId: "1:733420976623:web:3b2736f0207933f1959e1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;