
import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import { Creators as PlaylistDetailsActions } from '../ducks/playlistDetail'
import { Creators as ErrorActions } from '../ducks/error'

export function* getPlaylistDetails(action) {
	try {
		const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

		yield put(PlaylistDetailsActions.getPlayListDetailsSuccess(response.data))

	} catch (error) {
		yield put(ErrorActions.setErro('não foi possivel ober os detalhes da playlist'))
	}
}