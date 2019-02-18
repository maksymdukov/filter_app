export const mapStateToProps = (store) => ({
    inputFilter: store.filter.inputFilter,
    listDB: store.list,
    activeFilter: store.filter.activeFilter
});