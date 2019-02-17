import {SET_ACTIVE_FILTER} from '../types';

export default (state = "", {type, filter}) => {
    switch (type) {
        case SET_ACTIVE_FILTER:
            return filter;
        default:
            return state;
    }
}