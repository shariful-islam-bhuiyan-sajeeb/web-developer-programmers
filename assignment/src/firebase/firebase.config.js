// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBstiJHOatxjXKJLhdtc6XO9UI2LnPmiiE",
    authDomain: "assignment-10-cline-projects.firebaseapp.com",
    projectId: "assignment-10-cline-projects",
    storageBucket: "assignment-10-cline-projects.appspot.com",
    messagingSenderId: "584704458557",
    appId: "1:584704458557:web:22bc4f8c4407103bce0f54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;