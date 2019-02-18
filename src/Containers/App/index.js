import React from 'react';
import './styles.scss';
import Filter from '../Filter';
import ShowList from '../ShowList';


const App = () => {
        return (
            <div className="app">
                <Filter/>
                <ShowList/>
            </div>
        );
};

export default App;
