import { combineReducers } from 'redux';
import AuthReducer from './reducers/authReducer/AuthReducer';
import ListReducer from './reducers/listReducer/ListReducer';
import VideoReducer from './reducers/videoReducer/VideoReducer';

const roostReducer = combineReducers({
	auth: AuthReducer,
	list: ListReducer,
	video: VideoReducer,
});

export default roostReducer;
