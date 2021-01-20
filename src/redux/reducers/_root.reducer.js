import { combineReducers } from 'redux';
import hasBrackets from './brackets.reducer';
import setTheme from './setTheme.reducer';
import about from './about.reducer';
import project from './project.reducer';
import dimensions from './dimensions.reducer';
import routes from './routes.reducer';

const rootReducer = combineReducers({
  hasBrackets,
  setTheme,
  about,
  project,
  dimensions,
  routes,
});

export default rootReducer;
