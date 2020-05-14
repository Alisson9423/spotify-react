import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as PlaylistActions } from '../../store/ducks/playlist'

import { Container, NewPlayList, Nav } from "./styles";
import AddPlayListIcon from "../../assets/images/add_playlist.svg";
import Loading from '../../components/Loading'

//getPlayListSuccess, 

const SideBar = ({ getPlayListRequest, playlist }) => {

	useEffect(() => {
		getPlayListRequest()
	}, [getPlayListRequest])


	return (
		<Container>
			<div>
				<Nav main>
					<li>
						<Link to="/">Navegar</Link>
					</li>
					<li>
						<Link to="/">Rádio</Link>
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
						{playlist.loading && <Loading />}
					</li>
					{playlist.data.map((playlist, key) => (
						<li key={key}>
							<Link to={`/playlist/${playlist.id}`}>{playlist.title}</Link>
						</li>
					))}
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

SideBar.propTypes = {
	getPlayListRequest: PropTypes.func,
	getPlayListSuccess: PropTypes.func,
	playlist: PropTypes.shape({

		data: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string
		})),

		loading: PropTypes.bool
	}),
}

const mapStateToProps = state => ({
	playlist: state.Playlists
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(PlaylistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)