import React from "react";

import { Container, Search, User } from "./styles";

export default function Header() {
	return (
		<Container>
			<Search>
				<input type="text" placeholder="search" />
			</Search>

			<User>
				<img
					src="https://avatars2.githubusercontent.com/u/30739756?v=4"
					alt="Avatar"
				/>
				Alisson Ferreira
			</User>
		</Container>
	);
}
