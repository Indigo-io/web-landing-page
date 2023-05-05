import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

export default async function handler(req, res) {
  const firebase = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    //databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  });

  try {
    const data = mapper(JSON.parse(req.body));
    const db = getFirestore(firebase);
    const usersCol = collection(db, "users");
    await addDoc(usersCol, data);

    res.json({ ok: true });
  } catch (error) {
    res.json({ error });
  }
}

function mapper(data) {
  return {
    ...data,
    isContacted: false,
    withProgram: false,
    isInterviewed: false,
  };
}
