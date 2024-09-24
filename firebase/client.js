// firebase/client.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAWZ9RZBi6q2CiDBeZ4PRxlU1xB7k6caq4",
  authDomain: "neurohab-54ceb.firebaseapp.com",
  projectId: "neurohab-54ceb",
  storageBucket: "neurohab-54ceb.appspot.com",
  messagingSenderId: "713847484212",
  appId: "1:713847484212:web:4932c4721bd0c87d833f61"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Configurar persistencia de sesión
setPersistence(auth, browserLocalPersistence);

// Función para iniciar sesión con Google
export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};
export const logout = () => {
  return auth.signOut();
};

export { auth };
