import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';

const defaultState = {
  playlists: {},
  albums: {},
  songs: {},
  artists: {}
};

const SearchReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, state, action.searchResults);
    case CLEAR_SEARCH_RESULTS:
      return defaultState;
    default:
      return state;
  }
};

export default SearchReducer;
