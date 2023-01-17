import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC2NEF-DbDkHPP5vYbiAqOEF5L00rNSjHY",
    authDomain: "gb-285061-f5147.firebaseapp.com",
    projectId: "gb-285061-f5147",
    storageBucket: "gb-285061-f5147.appspot.com",
    messagingSenderId: "785970013810",
    appId: "1:785970013810:web:4949cb257c7aadb4b344eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)

// передаем данные из inputs
export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password)

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password)

export const logOut = async () => await signOut(firebaseAuth)

//для базы данных(сообщения)
const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const messagesRef = ref(db, 'messages')

export const getChatById = (chatId) => ref(db, `messages/${chatId}`)

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`)
