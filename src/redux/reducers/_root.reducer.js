import { combineReducers } from 'redux';
import newMessage from './newMessage.reducer';
import hasBrackets from './brackets.reducer';
import setTheme from './setTheme.reducer';
import about from './about.reducer';

const rootReducer = combineReducers({
  newMessage,
  hasBrackets,
  setTheme,
  about,
});

export default rootReducer;
