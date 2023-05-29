import {Navigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext.jsx";

export const PrivateRoute = ({children}) => {

	const {currentUser} = UserAuth()

	if (!currentUser) {
		return <Navigate to="/" replcae={true}/>
	}

	return children
}

