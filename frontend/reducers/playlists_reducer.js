import {
  RECEIVE_PLAYLISTS,
  RECEIVE_PLAYLIST,
  REMOVE_PLAYLIST
} from '../actions/playlist_actions';

import { RECEIVE_PLAYLIST_SONG } from '../actions/playlist_song_actions';

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists);
    case RECEIVE_PLAYLIST:
      return Object.assign({}, state, { [action.playlist.id]: action.playlist });
    case REMOVE_PLAYLIST:
      const newState = Object.assign({}, state);
      delete newState[action.playlistId];
      return newState;
    case RECEIVE_PLAYLIST_SONG:
      const playlist = state[action.playlistSong.playlist_id];
      playlist.songs.push(action.playlistSong.song_id);
      return Object.assign({}, state, { [playlist.id]: playlist });
    default:
      return state;
  }
};

export default PlaylistsReducer;
