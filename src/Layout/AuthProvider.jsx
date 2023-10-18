import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../FireBase/FireBase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    // GOOGLE LOGIN
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // provider values
    const authInfo = {
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;