import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

if (root) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
}

reportWebVitals();

