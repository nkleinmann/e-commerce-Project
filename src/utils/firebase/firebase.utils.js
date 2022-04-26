// creates app instancs based on config
import { initializeApp } from 'firebase/app'
// authentication
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

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

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)