import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import ChatRoom from "./pages/ChatRoom.jsx";
import {Route, Routes} from "react-router-dom";
import {PrivateRoute} from "./routes/PrivateRoute.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";

function App() {

	return (
		<>
			<AuthProvider>
				<div className={"container mx-auto"}>
					<Navbar/>
					<Routes>
						<Route path="/" element={<Login/>}/>
						<Route path="/chat" element={<PrivateRoute><ChatRoom/></PrivateRoute>}/>
					</Routes>
				</div>

			</AuthProvider>
		</>
	)
}

export default App
