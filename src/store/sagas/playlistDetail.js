
import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetail'

export function* getPlaylistDetails(action) {
	try {
		const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

		yield put(PlaylistDetailsActions.getPlayListDetailsSuccess(response.data))

	} catch (error) {
		// eslint-disable-next-line no-undef
		console.log(error)
	}
}