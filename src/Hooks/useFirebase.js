import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('');
            }).catch(err => {
                setError(err.message)
            })
    }

    //google
    const googleSign = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        }).catch(err => {
            setError(err.message)
        })
    }
    //google
    const facebookSign = () => {
        const facebookProvider = new FacebookAuthProvider()
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user)
            }).catch(err => {
                setError(err.message)
            })
    }

    //logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                alert('sing out successfully')
                setUser({})
                setError('')
            }).catch(err => {
            setError(err.message)
        })
    }
    //userState
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
    }, [])
    

    return {
        user,
        error,
        logOut,
        googleSign,
        facebookSign,
        handleName,
        handleEmail,
        handlePassword,
        handleRegister,
        handleLogin
    }
    
}

export default useFirebase;