import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { App } from './App'
import { updateData } from './actions'
import registerServiceWorker from './registerServiceWorker'

const config = {
  type: 'solar',
  date: {
    fill: '#00b100',
    value: '15-12-2017 14:01:50',
  },
  p128: {
    //visible, position
    name: 'T1',
    value: 123,
    unit: '°C',
    visible: true,
    position: 'default',
  },
  p130: {
    name: 'T2',
    value: 11,
    unit: '°C',
    visible: true,
    position: 'default',
  },
  p132: {
    name: 'T3',
    value: 33,
    unit: '°C',
    visible: true,
    position: 'default',
  },
  p134: {
    name: 'T4',
    value: 34,
    unit: '°C',
    visible: true,
    position: 'default',
  },
  p136: {
    name: 'T5',
    value: 34,
    unit: '°C',
    visible: true,
    position: 'default',
  },
  p138: {
    name: 'T6',
    value: 34,
    unit: '°C',
    visible: true,
    position: 'default',
  },
  p152: {
    name: 'F1',
    value: 33,
    unit: 'l/min',
    visible: true,
    position: 'default',
  },
  p170: {
    name: 'Schemat',
    value: 13,
  },
  p292: {
    name: 'F2',
    value: 12,
    unit: 'l/min',
    visible: true,
    position: 'default',
  },
  p156: {
    name: 'E1',
    value: 100,
    unit: '%',
    visible: true,
    position: 'default',
  },
}

const run = (config, selector) => {
  const target = document.querySelector(selector)
  if (!target) {
    return
  }

  const handler = render(
    <Provider store={store}>
      <App parent={target} />
    </Provider>,
    target,
  )

  handler.props.store.dispatch(updateData(config))

  return handler
}

if (process.env.NODE_ENV !== 'production') {
  run(config, '#root')
  registerServiceWorker()
}

export const scheme = (config, selector) => {
  let handler = run(config, selector)

  return {
    updateConfig: config => {
      handler.props.store.dispatch(updateData(config))
    },
  }
}
