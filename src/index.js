import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import Builder from './components/Builder';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
      <Builder />
    </Provider>,
    document.getElementById('builder')
);
