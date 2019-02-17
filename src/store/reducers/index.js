import {combineReducers} from 'redux';
import itemList from './itemList';
import fetchList from './fetchList';
import inputFilter from './inputFilter';
import activeFilter from './activeFilter';

const rootReducer = combineReducers({
    itemList,
    fetchList,
    inputFilter,
    activeFilter
});

export default rootReducer;