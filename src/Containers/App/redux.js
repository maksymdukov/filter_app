import {
    REQUEST_LIST,
    RECEIVED_LIST
} from '../../store/types';

export const mapStateToProps = (store) => ({
    itemList: store.itemList,
    listDB: store.fetchList
});

export const mapActionsToProps = (dispatch) => ({
    fetchList: (link) => {
        dispatch({
            type: REQUEST_LIST
        });
        setTimeout(() => {
            fetch(link)
                .then((response) => response.json())
                .then(listObj => {
                        dispatch({
                            type: RECEIVED_LIST,
                            payload: listObj
                        });
                    }
                );
        }, 1000);
    }
});