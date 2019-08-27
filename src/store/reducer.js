import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store/index.js';
import { reducer as homeReducer } from '../main-pages/home/store/index.js';
import { reducer as readReducer } from '../main-pages/read/store/index.js';
import { reducer as loginReducer } from '../main-pages/login/store/index.js';

const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	read: readReducer,
	login: loginReducer,
})

export default reducer;