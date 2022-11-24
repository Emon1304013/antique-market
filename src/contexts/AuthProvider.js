import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();


const createUser  = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const updateUserProfile = (name) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName : name,
    })
  }

const signInUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}


const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser)
        setLoading(false)
    });
    return () => unsubscribe();
},[])

const AuthInfo = {
    user,
    createUser,
    updateUserProfile,
    signInUser,
    googleSignIn,
    signOutUser,
    loading

}

  return <AuthContext.Provider value={AuthInfo}>
            {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
