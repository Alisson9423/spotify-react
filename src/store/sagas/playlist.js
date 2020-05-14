
import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import { Creators as PlaylistActions } from '../ducks/playlist'

export function* getPlaylist() {
	try {
		const response = yield call(api.get, '/playlists');

		yield put(PlaylistActions.getPlayListSuccess(response.data))

	} catch (error) {
		// eslint-disable-next-line no-undef
		console.log(error)
	}
}