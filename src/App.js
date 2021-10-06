import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Navbar />
					<Sidebar />
					<Footer />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
