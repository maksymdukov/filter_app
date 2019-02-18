import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from './redux';
import './styles.scss';
import ListItem from "../../Components/ListItem/";
import Loading from '../../Components/Loading/';
import PropTypes from "prop-types";

const ShowList = ({listDB, activeFilter, inputFilter}) => {
        let list = [];
        let listToRender;
        if (listDB.status === "success") {
            if (inputFilter) {
                list = listDB.payload.results.filter(item => {
                    return item.title.toLowerCase().startsWith(inputFilter.toLowerCase());
                });
            } else {
                list = listDB.payload.results.filter(item => {
                    return activeFilter ? item.tags.includes(activeFilter) : true;
                });
            }
            listToRender = list.map(item => (<ListItem key={item.title} item={item}/>));
        }
        return listDB.status !== "success"
            ? (<div className="listLoading"><Loading/></div>)
            : (<div className='showList'>
                    <ul>{listToRender}</ul>
                </div>
            )
};
ShowList.propTypes = {
    listDB: PropTypes.shape({
        tags: PropTypes.array,
        loading: PropTypes.bool,
        payload: PropTypes.object
    }),
    activeFilter: PropTypes.string,
    inputFilter: PropTypes.string,
};

export default connect(mapStateToProps, null)(ShowList);