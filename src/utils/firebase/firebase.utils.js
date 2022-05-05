// creates app instancs based on config
import { initializeApp } from 'firebase/app'
// authentication
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
 } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// config is an object that allows us to connect instance to one in console
// Your web app's Firebase configuration - will allows us to CRUD in our instance
const firebaseConfig = {
    apiKey: "AIzaSyDtn52LngIexRAMnf_RrALzefOK0fjrKOg",
    authDomain: "e-commerce-app-910f3.firebaseapp.com",
    projectId: "e-commerce-app-910f3",
    storageBucket: "e-commerce-app-910f3.appspot.com",
    messagingSenderId: "354633256174",
    appId: "1:354633256174:web:75641af8ac9de46569f7ff"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

//   can add more providers, such as Facebook and GitHub to add different ways to sign in - need to also pass in to anonymous function below
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
  ) => {
    if(!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

  //   special object
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
  //   exists is a helpful method to see if data exists in database already - will return true or false - boolean
    console.log(userSnapshot.exists())
    
    //   if user data does not exist
    //   create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date() // will know when new users sign in

        try { 
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

  //   if user data exists
  
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

//   utils is acting as a layer between front end code and third end libraries (how code is set up here - easy to change if firebase updates way of doing something)

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}