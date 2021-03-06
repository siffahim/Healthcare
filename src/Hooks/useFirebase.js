import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoad, setIsLoad] = useState(true);
    const auth = getAuth();
    
    
    //email & password
    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    //setusername
    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName:name})
    }

    //form register
    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setUserName()
                setError('');
            }).catch(err => {
            setError(err.message)
        })
    }
    //form login
    const handleLogin = () => {
       return signInWithEmailAndPassword(auth, email, password)
    
    }

    //google
    const googleSign = () => {
        setIsLoad(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }
    //facebook
    const facebookSign = () => {
        setIsLoad(true)
        const facebookProvider = new FacebookAuthProvider()
        return signInWithPopup(auth, facebookProvider)
    
    }
    //github
    const githubSign = () => {
        setIsLoad(true)
        const githubProvider = new GithubAuthProvider()
        return signInWithPopup(auth, githubProvider)
    }

    //logout
    const logOut = () => {
        setIsLoad(true)
        signOut(auth)
            .then(() => {
                alert('sing out successfully')
                setUser({})
                setError('')
            }).catch(err => setError(err.message))
            .finally(()=>setIsLoad(false))
    }
    //userState
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoad(false)
        })
    }, [])
    

    return {
        user,
        error,
        isLoad,
        setIsLoad,
        setUser,
        setError,
        logOut,
        googleSign,
        githubSign,
        facebookSign,
        handleName,
        handleEmail,
        handlePassword,
        handleRegister,
        handleLogin
    }
    
}

export default useFirebase;