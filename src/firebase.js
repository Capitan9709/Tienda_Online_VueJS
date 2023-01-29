import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// import { getStorage, ref as refFirebase, uploadBytes } from "firebase/storage";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyC0BxpfNRSEXmXtvYx6U7b4WYsrwqIyaek",
  authDomain: "tienda-online-vuejs.firebaseapp.com",
  projectId: "tienda-online-vuejs",
  storageBucket: "tienda-online-vuejs.appspot.com",
  messagingSenderId: "11909178201",
  appId: "1:11909178201:web:4f6cc164c05014776ca248",
  measurementId: "G-K1X7907FWB"
});

// export const storage = getStorage(app);
const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
// const storage = getStorage();