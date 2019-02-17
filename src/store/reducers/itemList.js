import {CHANGE_ITEM_LIST} from '../types';
import {ADD_ITEM_TO_LIST} from '../types';

export default (state = [], {type, payload}) => {
    switch (type) {
        case CHANGE_ITEM_LIST:
            return payload;
        case ADD_ITEM_TO_LIST:
            return [...state, payload];
        default:
            return state;
    }
}