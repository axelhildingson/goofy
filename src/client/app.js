import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import StartView from './view/index';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <StartView />
    </Provider>,
    document.getElementById('app')
);
