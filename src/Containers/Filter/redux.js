import {SET_INPUT_FILTER} from '../../store/types';
import {SET_ACTIVE_FILTER} from '../../store/types';
import asyncFetchList from "../../store/actions/fetchListAction";

export const mapStateToProps = (store) => ({
    inputFilter: store.filter.inputFilter,
    listDB: store.list,
    activeFilter: store.filter.activeFilter
});


export const mapActionsToProps = (dispatch) => ({
    setInputFilter: (value) => {
        dispatch({
            type: SET_INPUT_FILTER,
            inputFilter: value
        });
    },
    selectFilter: (filter) => {
        dispatch({
            type: SET_ACTIVE_FILTER,
            activeFilter: filter
        })
    },
    fetchList: (link) => {
        dispatch( asyncFetchList(link) );
    }
});