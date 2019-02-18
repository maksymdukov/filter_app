// node modules
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

// local files and components
import ListItem from "../../Components/ListItem/";
import Loading from '../../Components/Loading/';

// styles and decorators values
import './styles.scss';
import {mapStateToProps} from './redux';

const ShowList = ({
                      listDB: {
                          status,
                          payload: { listObj: {results} }
                          },
                      activeFilter,
                      inputFilter
                }) => {

        let list = [];
        let listToRender;
        if (status === "success") {
            list = inputFilter
                ? results.filter(({title}) => title.toLowerCase().startsWith(inputFilter.toLowerCase()))
                : results.filter(({tags}) => activeFilter ? tags.includes(activeFilter) : true);

            listToRender = list.map( item => <ListItem key={item.title} item={item}/> );
        }
        return (
            status !== "success"
                ? (<div className="listLoading"><Loading/></div>)
                : (
                    <div className='showList'>
                        <ul>{listToRender}</ul>
                    </div>
                )
        )
};
ShowList.propTypes = {
    listDB: PropTypes.shape({
        loading: PropTypes.bool,
        payload: PropTypes.object
    }),
    activeFilter: PropTypes.string,
    inputFilter: PropTypes.string,
};

export default connect(mapStateToProps, null)(ShowList);