import { combineReducers } from 'redux';
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTION_GRID_FIELDS,
  REQUEST_SUM,
} from '../actions';
import {
  defaultTransactions,
  defaultTransactionGridFields,
  defaultSummary
} from './defaults';

/**
 * Transaction
 * id: int
 * name: string
 * value: number
 * @type {Array}
 */


function addTransaction(state, action) {
  const { description, value } = action.transaction;
  window.state = state;
  console.log(state);
  const newState = [{
    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    description: description,
    value: value
  }, ...state];
  return newState;
}

function transactions(state=defaultTransactions, action) {
  let newState;
  switch (action.type) {
  case ADD_TRANSACTION:
    return addTransaction(state, action);
  case DELETE_TRANSACTION:
    newState = state.filter(todo => todo.id !== action.id );
    return newState;
  default:
    return state;
  }
}

function transactionsGrid(state=defaultTransactionGridFields, action) {
  switch (action.type) {
  case GET_TRANSACTION_GRID_FIELDS:
    return state;
  default:
    return state;
  }
}

function summary(state=defaultSummary, action) {
  switch (action.type) {
  case REQUEST_SUM:
    let sum = action.data.reduce((prev, current) => {
      return {value: prev.value + current.value };
    });

    sum = {value: Math.round(sum.value * 100) / 100};
    return {...state, ...sum};
  default:
    return state;
  }
}

export default combineReducers({
  transactionsGrid,
  transactions,
  summary
});
