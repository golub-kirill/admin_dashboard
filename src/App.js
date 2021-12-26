import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import BarsWrapper from "./hoc/BarsWrapper";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth" element={<Auth />}/>
				<Route
					path="/"
					element={<BarsWrapper wrappedComponent={<Dashboard />} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
