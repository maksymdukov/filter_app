import React from 'react';
import './styles.scss';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {mapStateToProps, mapActionsToProps} from './redux';
import FilterItems from '../../Components/FilterItems/';
import Search from '../../Components/Search/';
import Loading from '../../Components/Loading/';
import AllFilter from "../../Components/AllFilter/";

class Filter extends React.Component {

    componentDidMount() {
        this.props.fetchList('sdks.json');
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
                        {...{activeFilter, inputFilter}}
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

Filter.propTypes = {
    listDB: PropTypes.shape({
        tags: PropTypes.array,
        loading: PropTypes.bool,
        payload: PropTypes.object
    }),
    activeFilter: PropTypes.string,
    inputFilter: PropTypes.string,
    setInputFilter: PropTypes.func.isRequired,
    selectFilter: PropTypes.func.isRequired,
    fetchList: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Filter);