import { BrowserRouter, Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<BrowserRouter>
			<div className={css.App}>
				<div className={css.col}>
					<Sidebar />
				</div>
				<div className={css.col}>
					<Navbar />
					<Routes>
						<Route path="/dash" exact element={<Dashboard />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
