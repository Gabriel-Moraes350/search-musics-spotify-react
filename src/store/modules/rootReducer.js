import { combineReducers } from 'redux';

import favorites from './favorites/reducer';
import search from './search/reducer';

export default combineReducers({
  favorites,
  search,
});
