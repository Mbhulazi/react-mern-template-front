import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "sk-fullstack-template.firebaseapp.com",
  projectId: "sk-fullstack-template",
  storageBucket: "sk-fullstack-template.appspot.com",
  messagingSenderId: "209384806232",
  appId: "1:209384806232:web:44eec55ddf76ea5847b72d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;