import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBf5VImm_EmkGKXN2jj0n-J_Y_kZyae5AA",
  authDomain: "itbm-638bc.firebaseapp.com",
  projectId: "itbm-638bc",
  storageBucket: "itbm-638bc.appspot.com",
  messagingSenderId: "110840364458",
  appId: "1:110840364458:web:5962758e58c661e12c3fd3",
  measurementId: "G-C4D2C6LGH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth};