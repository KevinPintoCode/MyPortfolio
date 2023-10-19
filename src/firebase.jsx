// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAkWlAQ9FcDGYrJv4QAyPF_ivTvaX0N_ME',
  authDomain: 'reacth-portfolio-dashboard.firebaseapp.com',
  projectId: 'reacth-portfolio-dashboard',
  storageBucket: 'reacth-portfolio-dashboard.appspot.com',
  messagingSenderId: '665216039004',
  appId: '1:665216039004:web:e176d0cdfb79a47b0a4e99',
  measurementId: 'G-V232T6K5DR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
//My Database
export const DB = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
