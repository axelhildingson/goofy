import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import StartView from './view/index';
import { createStore } from 'redux';
import goofy from './reducers';

let store = createStore(goofy)

render(
    <Provider store={store}>
        <StartView />
    </Provider>,
    document.getElementById('app')
);
