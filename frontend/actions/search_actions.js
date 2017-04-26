import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

const receiveSearchResults = searchResults => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const fetchSearchResults = searchTerm => dispatch => {
  return SearchApiUtil.fetchSearchResults(searchTerm)
    .then(searchResults => dispatch(receiveSearchResults(searchResults)));
};