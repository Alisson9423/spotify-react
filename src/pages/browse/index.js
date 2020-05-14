import React, { useEffect } from "react";

import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistActions } from '../../store/ducks/playlist'

import { Container, Title, List, Playlist } from './styles';
import Loading from '../../components/Loading'

function Browse({ getPlayListRequest, playlist }) {

	useEffect(() => {
		getPlayListRequest()
	}, [getPlayListRequest])

	return (
		<Container>
			<Title>Navegar {playlist.loading && <Loading />} </Title>

			<List>
				{playlist.data.map(playlist => {
					return (
						<Playlist key={playlist.id} to={`/playlist/${playlist.id}`}>
							<img src={playlist.thumbnail} alt={playlist.title} />
							<strong>{playlist.title}</strong>
							<p>{playlist.description}</p>
						</Playlist>
					)
				})}
			</List>
		</Container>
	);
}

Browse.propTypes = {
	getPlayListRequest: PropTypes.func,
	getPlayListSuccess: PropTypes.func,
	playlist: PropTypes.object,
	thumbnail: PropTypes.string,
	description: PropTypes.string,
}

const mapStateToProps = state => ({
	playlist: state.Playlists
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(PlaylistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse)