import React from 'react';
import './styles.scss';
import {connect} from 'react-redux';
import {mapStateToProps, mapActionsToProps} from './redux';
import FilterItems from '../../Components/FilterItems/';
import Search from '../../Components/Search/';
import Loading from '../../Components/Loading/';
import AllFilter from "../../Components/AllFilter/";

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnChange = (event) => {
        let value = event.target.value.replace(/\s{2,}/, ' ');
        value = value.replace(/^\s+(.*)/, '$1');
        this.props.setInputFilter(value);
        if (value && this.props.activeFilter) {
            this.props.selectFilter("");
        }
    };

    handleSelectFilter = (event) => {
        this.props.selectFilter(event.target.value);
        if (this.props.inputFilter) this.props.setInputFilter("");
    };

    render() {
        const {listDB, activeFilter, inputFilter} = this.props;
        return (
            <div className="filter">
                <ul>
                    <Search
                        {...{inputFilter}}
                        handleOnChange={this.handleOnChange}
                        handleSelectFilter={this.handleSelectFilter}
                    />
                    <AllFilter
                        {...{activeFilter}}
                        {...{inputFilter}}
                        handleSelectFilter={this.handleSelectFilter}
                    />
                    {listDB.loading
                        ? (<li className="filterLoading"><Loading/></li>)
                        : <FilterItems
                            listDB={listDB}
                            {...{activeFilter}}
                            handleSelectFilter={this.handleSelectFilter}
                        />}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Filter);