// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,} from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALbw4zHtrBedC4iu_kJ2Hxy8Uct4FiN5g",
  authDomain: "uploadfiles-42bd0.firebaseapp.com",
  projectId: "uploadfiles-42bd0",
  storageBucket: "uploadfiles-42bd0.appspot.com",
  messagingSenderId: "832101510689",
  appId: "1:832101510689:web:2946eec7d2e7d0fa717d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage();
export default db;