import { combineReducers } from 'redux';

import counterReducer from './counter';
import loggedReducer from './isLogged';
import mainListReducer from './main-list';


const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer,
    mainList: mainListReducer
});

export default allReducers;