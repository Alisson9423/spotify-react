
import { call, put } from 'redux-saga/effects'
import api from '../../services/api'

import { Creators as PlaylistActions } from '../ducks/playlist'
import { Creators as ErrorActions } from '../ducks/error'

export function* getPlaylist() {
	try {
		const response = yield call(api.get, '/playlists');

		yield put(PlaylistActions.getPlayListSuccess(response.data))

	} catch (error) {
		yield put(ErrorActions.setErro('não foi possivel ober as playlist'))
	}
}