import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBase/FireBase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // GOOGLE LOGIN
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUser = (name, photo) => {
        setLoading(true);
        return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // SignOut
    
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // provider values
    const authInfo = {
        googleLogin,
        userSignOut,
        createUser,
        updateUser,
        user,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            return() => {
                unsubscribe();
            }
        })
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;