import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./store";
import { App } from './App';
import { updateData } from './actions';
import registerServiceWorker from './registerServiceWorker';

const config = {
    type: 'cop',
    date: {
        fill: '#00b100',
        value: '15-12-2017 14:01:50'
    },
    p128: {
        name: 'Moc',
        value: 1,
        unit: 'W',
        visible: true,
        position: 'default'
    },
    p132: {
        name: 'Moc',
        value: 11,
        unit: 'W',
        visible: true,
        position: 'default'
    },
    p140: {
        name: 'Napięcie',
        value: 1,
        unit: 'V',
        visible: true,
        position: 'default'
    },
    p144: {
        name: 'Napięcie',
        value: 1,
        unit: 'V',
        visible: true,
        position: 'default'
    },
    p148: {
        name: 'Natężenie',
        value: 1,
        unit: 'A',
        visible: true,
        position: 'default'
    },
    p152: {
        name: 'Natężenie',
        value: 1,
        unit: 'A',
        visible: true,
        position: 'default'
    },
    p160: {
        name: 'Ogrzewanie 1',
        value: 1,
        unit: 'kWh',
        visible: true,
        position: 'default'
    },
    p168: {
        name: 'Ogrzewanie 2',
        value: 122,
        unit: 'kWh',
        visible: true,
        position: 'default'
    },
    p184: {
        name: 'Temperatura T1',
        value: 122,
        unit: '°C',
        visible: true,
        position: 'default'
    },
    p186: {
        name: 'Temperatura T2',
        value: 122,
        unit: '°C',
        visible: true,
        position: 'default'
    },
    p186_p184: {
        name: 'Różnica T1 - T2',
        value: 122,
        unit: '°C',
        visible: true,
        position: 'default'
    },
    p192: {
        name: 'Moc',
        value: 11,
        unit: 'W',
        visible: true,
        position: 'default'
    },
    p190: {
        name: 'Przepływ',
        value: 122,
        unit: 'l/min',
        visible: true,
        position: 'default'
    },
    p200: {
        name: 'Ciepło',
        value: 122,
        unit: 'kWh',
        visible: true,
        position: 'default'
    },
    p208: {
        name: 'Wodomierz',
        value: 122,
        unit: 'l',
        visible: true,
        position: 'default'
    },
    p230: {
        name: 'Chłód',
        value: 11,
        unit: 'kWh',
        visible: true,
        position: 'default'
    },
    p232: {
        name: 'Rozmrażanie',
        value: 11,
        unit: 'kWh',
        visible: true,
        position: 'default'
    },
    p238: {
        name: 'Chłodzenie',
        value: 12,
        unit: 'kWh',
        visible: true,
        position: 'default'
    },
};

const run = (config, selector) => {
    const target = document.querySelector(selector);
    if (!target) {
        return;
    }

    const handler = render(
        <Provider store={store}>
            <App parent={target}/>
        </Provider>,
        target
    );

    handler.props.store.dispatch(updateData(config));

    return handler;
};

if (process.env.NODE_ENV !== 'production') {
    run(config, '#root');
    registerServiceWorker();
}

export const scheme = (config, selector) => {
    let handler = run(config, selector);

    return {
        updateConfig: (config) => {
            handler.props.store.dispatch(updateData(config));
        }
    };
};
