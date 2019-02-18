import {REQUEST_LIST} from '../types';
import {RECEIVED_LIST} from '../types';

export default (state = {
    loading: false,
    payload: {},
    tags: [],
    status: null
                },{type, payload, tags}) => {
    switch (type) {
        case REQUEST_LIST:
            return {
                ...state,
                loading: true
            };
        case RECEIVED_LIST:
            return {
                loading: false,
                payload,
                tags,
                status: "success"
            };
        default:
            return state;
    }
}