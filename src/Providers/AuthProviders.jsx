import { createContext, useState } from "react";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
	const [user,setUser] = useState(null);
	const createUser = (email,password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const authInfo = {
		user,
		createUser
	}
	return (
		<AuthContext.Provider>
              {children}
		</AuthContext.Provider>
	);
};

export default AuthProviders;