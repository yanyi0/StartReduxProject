import counter from '../reducer/gunReducer';
import auth from '../reducer/authReducer';
import {combineReducers} from 'redux';
export default combineReducers({counter,auth});