import React from "react";

import { BrowserRouter } from 'react-router-dom'

import GlobalStyled from "./styles/global";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

import Routes from "./routes";

function App() {
	return (
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
	);
}

export default App;
