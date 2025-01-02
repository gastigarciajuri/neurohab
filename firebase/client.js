// firebase/client.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const db = getFirestore(app);
const storage = getStorage(app);

// Configurar persistencia de sesión
setPersistence(auth, browserLocalPersistence);

// Función para iniciar sesión con Google
export const loginWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
  }
};

// Función para cerrar sesión
export const logout = () => {
  return auth.signOut();
};

export { auth, db, storage };
