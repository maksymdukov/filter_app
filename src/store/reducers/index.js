import {combineReducers} from 'redux';
import fetchListReducer from './fetchListReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    list: fetchListReducer,
    filter: filterReducer
});

export default rootReducer;