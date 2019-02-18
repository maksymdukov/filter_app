import {RECEIVED_LIST, REQUEST_LIST} from "../types";
import {fetchList} from "../../api"
import uniqueTags from '../../utils/uniqueTags';


export default (link) => {
    return async (dispatch) => {
        dispatch({ type: REQUEST_LIST });
        const listObj = await fetchList(link);
        const tags = uniqueTags(listObj);
        dispatch({
            type: RECEIVED_LIST,
            payload:{listObj, tags}
        });
    }
}