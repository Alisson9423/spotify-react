import React from "react";

import { Container, Title, List, Playlist } from './styles';

export default function Browse() {
	return (
		<Container>
			<Title>Navegar</Title>

			<List>
				<Playlist to="/playlist/1">
					<img src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg" alt=""/>
					<strong>Rock dos Bons</strong>
					<p>Relaxa enquanto você programa ouvindo apenas as melhres do rock mundial!</p>
				</Playlist>
				<Playlist to="/playlist/1">
					<img src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg" alt=""/>
					<strong>Rock dos Bons</strong>
					<p>Relaxa enquanto você programa ouvindo apenas as melhres do rock mundial!</p>
				</Playlist>
				<Playlist to="/playlist/1">
					<img src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg" alt=""/>
					<strong>Rock dos Bons</strong>
					<p>Relaxa enquanto você programa ouvindo apenas as melhres do rock mundial!</p>
				</Playlist>
				<Playlist to="/playlist/1">
					<img src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg" alt=""/>
					<strong>Rock dos Bons</strong>
					<p>Relaxa enquanto você programa ouvindo apenas as melhres do rock mundial!</p>
				</Playlist>
			</List>
		</Container>
	);
}
