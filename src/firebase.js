import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "ISI PUNYA MU",
  authDomain: "ISI PUNYA MU",
  projectId: "ISI PUNYA MU",
  storageBucket: "ISI PUNYA MU",
  messagingSenderId: "ISI PUNYA MU",
  appId: "ISI PUNYA MU",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
