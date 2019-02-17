import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './store/reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));