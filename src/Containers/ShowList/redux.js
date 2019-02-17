export const mapStateToProps = (store) => ({
    inputFilter: store.inputFilter,
    listDB: store.fetchList,
    activeFilter: store.activeFilter
});