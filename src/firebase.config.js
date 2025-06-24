import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkrgoYtdW5zulJKiR_-ElCUEXYEd1wgwU",
  authDomain: "mediverso-3d.firebaseapp.com",
  projectId: "mediverso-3d",
  storageBucket: "mediverso-3d.firebasestorage.app",
  messagingSenderId: "180833714532",
  appId: "1:180833714532:web:459bb478e4a5a427c63a71"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);