
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDxtKgF7zJX63PotYdmCcJWp9alUtix-8",
  authDomain: "fana-clothing-db.firebaseapp.com",
  projectId: "fana-clothing-db",
  storageBucket: "fana-clothing-db.appspot.com",
  messagingSenderId: "669080842887",
  appId: "1:669080842887:web:b3b8b7f062e83a91aa7e22"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = collection(db, collectionKey);

//   const batch = writeBatch(db);

//   objectsToAdd.forEach((obj) => {
//     const newDocRef = doc(collectionRef, obj.title.toLowerCase());
//     batch.set(newDocRef, obj);
//   });

//   await batch.commit();
// };

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {})

  return categoryMap;
}


export const createUserDocumentFromAuth = async (userAuth, additionalData = {}) => {

  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) {
    return userRef;
  } else {
    //if user data does not exist, create it
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
      return userRef;
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;

}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return console.log("email and password are required")

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const userSignInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)