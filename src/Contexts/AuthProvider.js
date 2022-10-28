import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loader,setLoader]=useState(true)

	const providerLogin = provider => {
		return signInWithPopup(auth, provider);
	};
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const updateUserProfile = (name, photoUrl) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoUrl,
		});
	};
	const singInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOut = () => {
		signOut(auth);
	};
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			setLoader(false)
		});
		return () => {
			unSubscribe();
			
		};
	}, []);
	const authInfo = {
		user,
		providerLogin,
		createUser,
		updateUserProfile,
		singInUser,
		logOut,
		loader,
		setLoader

	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
