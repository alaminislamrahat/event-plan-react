import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    // register 
    const register = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // login 
    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // log out 
     const logOut = ()=>{
        return signOut(auth);
     }

    //  github login 
     const provider = new GoogleAuthProvider()
    const googleLogin = ()=>{
        return signInWithPopup(auth,provider);
    }

    // user observation 
    useEffect(()=>{
        
        const unSubscribe = onAuthStateChanged(auth, currentuser =>{
            console.log('current user observe',currentuser);
            setUser(currentuser);
            setLoading(false);
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    const info = {
        user,
        loading,
        register,
        login,
        logOut,
        googleLogin
        
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;