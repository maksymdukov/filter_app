import {SET_INPUT_FILTER} from '../../store/types';
import {SET_ACTIVE_FILTER} from '../../store/types';

export const mapStateToProps = (store) => ({
    inputFilter: store.inputFilter,
    listDB: store.fetchList,
    activeFilter: store.activeFilter
});


export const mapActionsToProps = (dispatch) => ({
    setInputFilter: (value) => {
        dispatch({
            type: SET_INPUT_FILTER,
            payload: value
        });
    },
    selectFilter: (filter) => {
        dispatch({
            type: SET_ACTIVE_FILTER,
            filter
        })
    }
});