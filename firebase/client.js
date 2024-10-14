// // firebase/client.js
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
// import firebase from "firebase/compat/app";

// // Configuración de Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAWZ9RZBi6q2CiDBeZ4PRxlU1xB7k6caq4",
//   authDomain: "neurohab-54ceb.firebaseapp.com",
//   projectId: "neurohab-54ceb",
//   storageBucket: "neurohab-54ceb.appspot.com",
//   messagingSenderId: "713847484212",
//   appId: "1:713847484212:web:4932c4721bd0c87d833f61"
// };

// // Inicializar Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = firebase.firestore()


// // Configurar persistencia de sesión
// setPersistence(auth, browserLocalPersistence);

// // Función para iniciar sesión con Google
// export const loginWithGoogle = () => {
//   const googleProvider = new GoogleAuthProvider();
//   return signInWithPopup(auth, googleProvider);
// };
// export const logout = () => {
//   return auth.signOut();
// };

// export { auth };
// firebase/client.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Importar Firestore y métodos necesarios

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
const db = getFirestore(app);  // Obtener Firestore

// Configurar persistencia de sesión
setPersistence(auth, browserLocalPersistence);

// Función para iniciar sesión con Google
export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider)
    .then(async (result) => {
      const user = result.user;
      const userRef = doc(db, "users", user.uid); // Referencia al documento del usuario
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
      }, { merge: true }); // Usar merge para evitar sobrescribir documentos existentes
      return user;
    });
};

export const logout = () => {
  return auth.signOut();
};

export { auth, db };
