import {RECEIVED_LIST, REQUEST_LIST} from "../types";

const delayer = (time) => {
    return new Promise( resolve => {
        setTimeout( resolve, time );
    } )
};

export default (link) => {
    return async (dispatch) => {
        dispatch({
            type: REQUEST_LIST
        });
        await delayer(2000);
        let response = await fetch(link);
        let listObj = await response.json();
        dispatch({
            type: RECEIVED_LIST,
            payload: listObj
        });
    }
}