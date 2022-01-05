import { Routes, Route } from "react-router-dom";
import BarsWrapper from "./hoc/BarsWrapper/BarsWrapper";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<BarsWrapper wrappedComponent={<Dashboard />} />}
			/>
			<Route
				path="/msg"
				element={<BarsWrapper wrappedComponent={<Messages />} />}
			/>
		</Routes>
	);
}

export default App;
