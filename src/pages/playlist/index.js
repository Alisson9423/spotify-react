import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetail'
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'
import Loading from '../../components/Loading';


function Playlist({ match, PlaylistsDetails, getPlayListDetailsRequest }) {

	useEffect(() => {
		function loadPlaylistDetails() {
			const { id } = match.params
			getPlayListDetailsRequest(id)
		}

		loadPlaylistDetails()

	}, [match, getPlayListDetailsRequest])



	function renderDetails() {
		const playlist = PlaylistsDetails.data

		return (
			<Container>
				<Header>
					<img src={playlist.thumbnail} alt={playlist.title} />

					<div>
						<span>PLAYLIST</span>
						<h1>{playlist.title}</h1>

						{!!playlist.songs && <p>{playlist.songs.length} musicas</p>}

						<button>PLAY</button>
					</div>
				</Header>

				<SongList cellSpacing={0} cellPadding={0}>
					<thead>
						<th></th>
						<th>Título</th>
						<th>Artista</th>
						<th>Álbum</th>
						<th><img src={ClockIcon} alt="" /></th>
					</thead>

					<tbody>

						{!playlist.songs ? (
							<tr>
								<td colSpan={5}>Nenhuma música cadastrada</td>
							</tr>
						) : (
								playlist.songs.map(song => {
									return (
										<tr key={song.id}>
											<td>
												<img src={PlusIcon} alt="Adicionar" />
											</td>

											<td>{song.title}</td>
											<td>{song.author}</td>
											<td>{song.album}</td>
											<td>3:26</td>
										</tr>
									)
								})
							)}
					</tbody>
				</SongList>
			</Container>
		)
	}

	return (
		PlaylistsDetails.loading ? (
			<Container loading> <Loading /> </Container>
		) : (
				renderDetails()
			)
	);
}


Playlist.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			id: PropTypes.number,
		})
	}).isRequired,

	getPlayListDetailsRequest: PropTypes.func.isRequired,

	PlaylistsDetails: PropTypes.shape({
		data: PropTypes.shape({
			thumbnail: PropTypes.string,
			title: PropTypes.string,
			songs: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number,
				title: PropTypes.string,
				author: PropTypes.string,
				album: PropTypes.string
			}))
		}).isRequired,
		loading: PropTypes.bool
	}).isRequired,

}

const mapStateToProps = state => ({
	PlaylistsDetails: state.PlaylistsDetails
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)