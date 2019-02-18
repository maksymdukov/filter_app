import asyncFetchList from '../../store/actions/fetchListAction';

export const mapStateToProps = (store) => ({
    itemList: store.itemList,
    listDB: store.fetchList
});

export const mapActionsToProps = (dispatch) => ({
    fetchList: (link) => {
        dispatch( asyncFetchList(link) );
    }
});