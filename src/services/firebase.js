// Importa funções principais do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// SUA CONFIGURAÇÃO (a mesma que você já pegou)
const firebaseConfig = {
  apiKey: "AIzaSyDh1iiCfnkYr_ZbO6lWOOK8Jb2EUt4fHH4",
  authDomain: "freeartss.firebaseapp.com",
  projectId: "freeartss",
  storageBucket: "freeartss.firebasestorage.app",
  messagingSenderId: "706206196430",
  appId: "1:706206196430:web:2f3a8ff38d7e2f96b3269f",
  measurementId: "G-ET2XCY4SGJ"
};

// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);

// Exportamos os serviços para usar no resto do projeto
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
