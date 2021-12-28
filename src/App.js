import { Routes, Route } from "react-router-dom";
import AuthWrapper from "./hoc/AuthWrapper/AuthWrapper";
import BarsWrapper from "./hoc/BarsWrapper/BarsWrapper";
import Dashboard from "./pages/Dashboard";
import WelcomeForm from "./components/Auth/WelcomeForm/WelcomeForm";
import LoginForm from "./components/Auth/LoginForm/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm/RegisterForm";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<AuthWrapper wrappedComponent={<WelcomeForm />} />}
			/>
			<Route
				path="/auth/login"
				element={<AuthWrapper wrappedComponent={<LoginForm />} />}
			/>
			<Route
				path="/auth/register"
				element={<AuthWrapper wrappedComponent={<RegisterForm />} />}
			/>
			<Route
				path="/dash"
				element={<BarsWrapper wrappedComponent={<Dashboard />} />}
			/>
		</Routes>
	);
}

export default App;
