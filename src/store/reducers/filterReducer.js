import {SET_ACTIVE_FILTER, SET_INPUT_FILTER} from '../types';

export default (state = {
    activeFilter: "",
    inputFilter: ""
}, {type, inputFilter, activeFilter}) => {
    switch (type) {
        case SET_ACTIVE_FILTER:
            return {...state, activeFilter};
        case SET_INPUT_FILTER:
            return {...state, inputFilter};
        default:
            return state;
    }
}