import { all, takeLatest } from 'redux-saga/effects'

import { Types as PlaylistTypes } from '../ducks/playlist'
import { Types as PlaylistDetailsTypes } from '../ducks/playlistDetail'

import { getPlaylist } from './playlist'
import { getPlaylistDetails } from './playlistDetail'

export default function* rootSaga() {
	yield all([
		takeLatest(PlaylistTypes.GET_REQUEST, getPlaylist),
		takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails),
	])
}