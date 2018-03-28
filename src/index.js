import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./store";
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <App parent={target}/>
    </Provider>,
    target
);
registerServiceWorker();