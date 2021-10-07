import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import { AboutPage, HomePage, ProductsPage, ErrorPage } from "./pages/index";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				<Route path="/products">
					<ProductsPage />
					<Sidebar />
				</Route>
				<Route path="*">
					<ErrorPage />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
