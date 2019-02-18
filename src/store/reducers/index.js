import {combineReducers} from 'redux';
import fetchListReducer from './listReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    list: fetchListReducer,
    filter: filterReducer
});

export default rootReducer;