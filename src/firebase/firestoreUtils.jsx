import { db } from "./config";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

export const saveUserToFirestore = async (id, data) => {
  await setDoc(doc(db, "users", id), data);
};

export const getUserFromFirestore = async (id) => {
  const docSnap = await getDoc(doc(db, "users", id));
  return docSnap.exists() ? docSnap.data() : null;
};

export const deleteUserFromFirestore = async (id) => {
  await deleteDoc(doc(db, "users", id));
};