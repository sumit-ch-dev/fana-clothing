
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
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

export const createUserDocumentFromAuth = async (userAuth, additionalData={}) => {

  if (!userAuth) return;

  const userRef = doc(db, "users", userAuth.uid);

  console.log(userRef)

  const userSnapshot = await getDoc(userRef);

  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  //if user data exists, return it

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
  if(!email || !password) return console.log("email and password are required")
  
  return await createUserWithEmailAndPassword(auth, email, password)
}
