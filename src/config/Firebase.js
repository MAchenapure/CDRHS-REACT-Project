import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDX8lsEHTWvh8oO7OXfKw7kP9wZFufOzPY",
    authDomain: "cdrhs-react-project.firebaseapp.com",
    projectId: "cdrhs-react-project",
    storageBucket: "cdrhs-react-project.appspot.com",
    messagingSenderId: "760062066214",
    appId: "1:760062066214:web:b5b70d7cbe74d9e88830e7"
  };

const app = firebase.initializeApp(firebaseConfig); 

export function getFirestore() {
    return firebase.firestore(app);
}