import {UserAuth} from "../context/AuthContext.jsx";

const Navbar = () => {

	const {currentUser, logout} = UserAuth()

	const handleLogout = async () => {
		try {

			await logout()

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="container mx-auto navbar fixed z-10 bg-base-300">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Chatify</a>
			</div>
			<div className="flex-none">
				{currentUser ? <button onClick={handleLogout} className="btn btn-ghost normal-case text-xl">
					Logout
				</button> : ""}
			</div>
		</div>
	)
}

export default Navbar