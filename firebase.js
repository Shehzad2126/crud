import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDCfGMfbO0fTyXeauBuKfPeTxlpblCMgOI",
    authDomain: "crud-6326c.firebaseapp.com",
    projectId: "crud-6326c",
    storageBucket: "crud-6326c.appspot.com",
    messagingSenderId: "3731999877",
    appId: "1:3731999877:web:c74f7edd1af1417fdaadec",
    measurementId: "G-XX0J64DN7F"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore();

export {app, database }