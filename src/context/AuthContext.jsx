import {createContext, useContext, useEffect, useState} from "react";
import {GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase.jsx";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)

	// Signin with google

	const signinWithGoogle = () => {
		const provider = new GoogleAuthProvider();

		signInWithRedirect(auth, provider)
	}

	// Signout

	const logout = () => signOut(auth);


	const value = {
		currentUser,
		setCurrentUser,
		signinWithGoogle,
		logout
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setLoading(false)
		})
		return unsubscribe
	}, [])

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(AuthContext)
}