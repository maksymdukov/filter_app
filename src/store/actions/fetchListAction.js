import {RECEIVED_LIST, REQUEST_LIST} from "../types";
import uniqueTags from '../../utils/uniqueTags';


export default (link) => {
    return async (dispatch) => {
        dispatch({
            type: REQUEST_LIST
        });
        let response = await fetch(link);
        let listObj = await response.json();
        let tags = uniqueTags(listObj);
        dispatch({
            type: RECEIVED_LIST,
            payload: listObj,
            tags
        });
    }
}