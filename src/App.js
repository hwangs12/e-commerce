import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
	AboutPage,
	HomePage,
	ProductsPage,
	ErrorPage,
	CartPage,
	SingleProductPage,
	CheckoutPage,
} from "./pages/index";

function App() {
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				<Route path="/products/:id" children={<SingleProductPage />} />
				<Route path="/products">
					<ProductsPage />
				</Route>
				<Route path="/cart">
					<CartPage />
				</Route>
				<Route path="/checkout">
					<CheckoutPage />
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
