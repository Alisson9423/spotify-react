import { combineReducers } from 'redux'
import Playlists from './playlist'
import PlaylistsDetails from './playlistDetail'
import Error from './error'


export default combineReducers({
	Playlists,
	PlaylistsDetails,
	Error
})