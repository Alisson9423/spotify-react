import React from "react";

import './config/reactotron'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'



import GlobalStyled from "./styles/global";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";
import store from './store'

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<GlobalStyled />
				<Wrapper>
					<Container>
						<SideBar />
						<Content>
							<Header />
							<Routes />
						</Content>
					</Container>
					<Player />
				</Wrapper>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
