import { combineReducers } from 'redux';
import newMessage from './newMessage.reducer';

const rootReducer = combineReducers({
  newMessage,
});

export default rootReducer;
