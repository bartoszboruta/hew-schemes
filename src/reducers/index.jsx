import { combineReducers } from 'redux';
import { data } from './data.reducer';
import { dimensions } from './dimensions.reducer';

const rootReducer = combineReducers({
  data,
  dimensions
});

export default rootReducer;
