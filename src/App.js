import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import { AboutPage, HomePage, ProductsPage, ErrorPage } from "./pages/index";

function App() {
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<Footer />
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				<Route path="/products">
					<ProductsPage />
				</Route>
				<Route path="*">
					<ErrorPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
