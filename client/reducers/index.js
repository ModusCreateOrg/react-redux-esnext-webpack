import { routeReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import transactions from './transactions';

export default combineReducers({
  routing,
  transactions
});
