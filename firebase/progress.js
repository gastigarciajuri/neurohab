// src/firebase/progress.js
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./client";
import { storage } from "./client";
import { ref, getDownloadURL } from "firebase/storage";
// Función para inicializar o actualizar el progreso del usuario en Firestore
export const initializeUserProgress = async (user) => {
  const userRef = doc(db, "users", user.uid);
  try {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      profilePicture: user.photoURL,
      progress: 0  // Si es un nuevo usuario, se inicializa el progreso
    }, { merge: true });
  } catch (error) {
    console.error("Error al inicializar/actualizar el progreso del usuario:", error);
  }
};

// Función para obtener el progreso del usuario
export const getUserProgress = async (userId) => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data().progress;
  } else {
    console.error("No se encontró el usuario.");
    return 0;
  }
};

// Función para actualizar el progreso del usuario
export const updateUserProgress = async (userId, stepCompleted) => {
  const userRef = doc(db, "users", userId);
  try {
    await updateDoc(userRef, {
      progress: stepCompleted
    });
    console.log(`Progreso actualizado al paso ${stepCompleted}`);
  } catch (error) {
    console.error("Error al actualizar el progreso del usuario:", error);
  }
};

// Función para obtener los datos de un módulo específico
export const getModuleData = async (moduleId) => {
  const moduleRef = doc(db, "modules", moduleId);
  try {
    const moduleSnap = await getDoc(moduleRef);
    if (moduleSnap.exists()) {
      return moduleSnap.data();
    } else {
      console.error("No se encontró el módulo.");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener los datos del módulo:", error);
  }
};

//Funcion para obtener URL de archivo Storage
export const getFileURL = async (filePath) => {
  try {
    const fileRef = ref(storage, filePath); // Referencia al archivo
    const fileURL = await getDownloadURL(fileRef); // Obtener la URL de descarga
    return fileURL; // Devolver la URL del archivo
  } catch (error) {
    console.error('Error al obtener la URL del archivo:', error);
    throw error;
  }
};
