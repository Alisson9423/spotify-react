import React from "react";

import { Container, NewPlayList, Nav } from "./styles";
import AddPlayListIcon from "../../assets/images/add_playlist.svg";

export default function SideBar() {
	return (
		<Container>
			<div>
				<Nav main>
					<li>
						<a href="">Navegar</a>
					</li>
					<li>
						<a href="">Rádio</a>
					</li>
				</Nav>

				<Nav>
					<li>
						<span>Sua Biblioteca</span>
					</li>

					<li>
						<a href="">Seu Daily Mix</a>
					</li>
					<li>
						<a href="">Tocados Recentemente</a>
					</li>

					<li>
						<a href="">Músicas</a>
					</li>
					<li>
						<a href="">Álbuns</a>
					</li>
					<li>
						<a href="">Artistas</a>
					</li>
					<li>
						<a href="">Estações</a>
					</li>
					<li>
						<a href="">Arquivos Locais</a>
					</li>
					<li>
						<a href="">Vídeos</a>
					</li>
					<li>
						<a href="">Podcast</a>
					</li>
				</Nav>

				<Nav>
					<li>
						<span>PlayLists</span>
					</li>
					<li>
						<a href="">Melhores Do Rock</a>
					</li>
				</Nav>
			</div>

			<NewPlayList>
				<img src={AddPlayListIcon} alt="Adicionar PlayList" />
				Nova Playlist
			</NewPlayList>
		</Container>
	);
}
