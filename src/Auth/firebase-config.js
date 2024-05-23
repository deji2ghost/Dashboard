import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDUBgbPXkLI1IMDsC2YrI-P2bhlEwFoFRM",
    authDomain: "dashboard-663b2.firebaseapp.com",
    projectId: "dashboard-663b2",
    storageBucket: "dashboard-663b2.appspot.com",
    messagingSenderId: "553574841111",
    appId: "1:553574841111:web:c0bd8334469831ce821552",
    measurementId: "G-Y926ESW789"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)