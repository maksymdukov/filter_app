// node modules
import React from 'react';

// local files and components
import Filter from '../Filter';
import ShowList from '../ShowList';

// styles
import './styles.scss';


const App = () => {
        return (
            <div className="app">
                <Filter/>
                <ShowList/>
            </div>
        );
};

export default App;
