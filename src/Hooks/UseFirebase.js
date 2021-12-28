import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Components/Login/Firebase/Firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";



initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');



    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;

                setUser(user)
            }).catch((error) => {
                setError(error.message)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
    }, []);

    return {
        googleSignIn,
        user,
        error,
        logOut
    };
};

export default UseFirebase;