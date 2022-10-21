import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGhSBe5fLzpe2GwioPZLRa8tde1eqooiU",
  authDomain: "react-native-goit.firebaseapp.com",
  projectId: "react-native-goit",
  storageBucket: "react-native-goit.appspot.com",
  messagingSenderId: "285942300234",
  appId: "1:285942300234:web:ef8bcee3840bfb8e1330b3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
