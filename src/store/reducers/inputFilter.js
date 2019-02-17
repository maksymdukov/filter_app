import {SET_INPUT_FILTER} from '../types';

export default (state = "", {type, payload}) => {
    switch (type) {
        case SET_INPUT_FILTER:
            return payload;
        default:
            return state;
    }
}