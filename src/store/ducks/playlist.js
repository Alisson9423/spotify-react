export const Types = {
	GET_REQUEST: 'GET_REQUEST',
	GET_SUCCESS: 'GET_SUCCESS',
}

const INITAL_STATE = {
	data: [],
	loading: false,
}

export default function playlists(state = INITAL_STATE, action) {


	switch (action.type) {
		case Types.GET_REQUEST:
			return { ...state, loading: true }

		case Types.GET_SUCCESS:
			return { ...state, loading: false, data: action.payload.data }

		default:
			return state
	}
}

export const Creators = {
	getPlayListRequest: () => ({ type: Types.GET_REQUEST }),

	getPlayListSuccess: data => ({
		type: Types.GET_SUCCESS,
		payload: { data },
	})
}