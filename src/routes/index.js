import React from "react";
import { Switch, Route } from "react-router-dom";
import Browser from "../pages/browse";
import PlayList from '../pages/playlist'

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Browser />
			</Route>

			<Route path="/playlist/:id" component={PlayList} />
		</Switch>
	);
}
