import firebaseConfig from "./Firebase.Config";
import { initializeApp } from "firebase/app";


const initializeAuthentication = () => {
    const app = initializeApp(firebaseConfig);
}

export default initializeAuthentication;