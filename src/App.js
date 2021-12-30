import { Routes, Route } from "react-router-dom";
import BarsWrapper from "./hoc/BarsWrapper/BarsWrapper";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<BarsWrapper wrappedComponent={<Dashboard />} />}
			/>
		</Routes>
	);
}

export default App;
