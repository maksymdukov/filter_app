import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from './redux';
import './styles.scss';
import ListItem from "../../Components/ListItem/";
import Loading from '../../Components/Loading/';

class ShowList extends React.Component {
    render() {
        let {listDB, activeFilter, inputFilter} = this.props;
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
}

export default connect(mapStateToProps, null)(ShowList);