import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapActionsToProps} from './redux';
import './styles.scss';
import Filter from '../Filter';
import ShowList from '../ShowList';


class App extends Component {
    componentDidMount() {
        this.props.fetchList('sdks.json');
    }

    render() {
        return (
            <div className="app">
                <Filter/>
                <ShowList/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(App);
