import {REQUEST_LIST} from '../types';
import {RECEIVED_LIST} from '../types';

export default (state = {
    loading: false,
    payload: {
        listObj: {},
        tags: []
    },
    status: null
                },{type, payload}) => {
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
                status: "success"
            };
        default:
            return state;
    }
}