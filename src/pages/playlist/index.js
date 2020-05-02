import React from 'react';

import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

export default function Playlist() {
	
	return (
		<Container>
			<Header>
				<img src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg" alt=""/>

				<div>
					<span>PLAYLIST</span>
					<h1>Rock Forever</h1>
					<p>13 musicas</p>

					<button>PLAY</button>
				</div>
			</Header>

			<SongList cellSpacing={0} cellPadding={0}>
				<thead>
					<th></th>
					<th>Título</th>
					<th>Artista</th>
					<th>Álbum</th>
					<th><img src={ClockIcon} alt=""/></th>
				</thead>

				<tbody>
					<tr>
						<td>
							<img src={PlusIcon} alt="Adicionar"/>
						</td>

						<td>Papercut</td>
						<td>Link Park</td>
						<td>Hybrid Theory</td>
						<td>3:26</td>
					</tr>
					<tr>
						<td>
							<img src={PlusIcon} alt="Adicionar"/>
						</td>

						<td>Papercut</td>
						<td>Link Park</td>
						<td>Hybrid Theory</td>
						<td>3:26</td>
					</tr>
					<tr>
						<td>
							<img src={PlusIcon} alt="Adicionar"/>
						</td>

						<td>Papercut</td>
						<td>Link Park</td>
						<td>Hybrid Theory</td>
						<td>3:26</td>
					</tr>
					<tr>
						<td>
							<img src={PlusIcon} alt="Adicionar"/>
						</td>

						<td>Papercut</td>
						<td>Link Park</td>
						<td>Hybrid Theory</td>
						<td>3:26</td>
					</tr>
					<tr>
						<td>
							<img src={PlusIcon} alt="Adicionar"/>
						</td>

						<td>Papercut</td>
						<td>Link Park</td>
						<td>Hybrid Theory</td>
						<td>3:26</td>
					</tr>
					<tr>
						<td>
							<img src={PlusIcon} alt="Adicionar"/>
						</td>

						<td>Papercut</td>
						<td>Link Park</td>
						<td>Hybrid Theory</td>
						<td>3:26</td>
					</tr>
					<tr>
						<td>
							<img src={PlusIcon} alt="Adicionar"/>
						</td>

						<td>Papercut</td>
						<td>Link Park</td>
						<td>Hybrid Theory</td>
						<td>3:26</td>
					</tr>
				</tbody>
			</SongList>
		</Container>
	);
}
