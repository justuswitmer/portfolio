import { combineReducers } from 'redux';
import newMessage from './newMessage.reducer';
import hasBrackets from './brackets.reducer';
import setTheme from './setTheme.reducer';

const rootReducer = combineReducers({
  newMessage,
  hasBrackets,
  setTheme,
});

export default rootReducer;
