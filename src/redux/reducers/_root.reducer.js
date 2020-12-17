import { combineReducers } from 'redux';
import newMessage from './newMessage.reducer';
import hasBrackets from './brackets.reducer';

const rootReducer = combineReducers({
  newMessage,
  hasBrackets,
});

export default rootReducer;
