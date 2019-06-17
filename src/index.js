import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { App } from './App'
import { updateData } from './actions'
import registerServiceWorker from './registerServiceWorker'

// POSITION: 0 - woda użytkowa // 1 - inne zastosowanie // 2, 3 - niestandardowe np sch3 na kotle
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
    position: 0,
  },
  p130: {
    name: 'T2',
    value: 11,
    unit: '°C',
    visible: true,
    position: 0,
  },
  p132: {
    name: 'T3',
    value: 33,
    unit: '°C',
    visible: true,
    position: 0,
  },
  p134: {
    name: 'T4',
    value: 34,
    unit: '°C',
    visible: true,
    position: 0,
  },

  p152: {
    name: 'F1',
    value: 33,
    unit: 'l/min',
    visible: true,
    position: 0,
  },

  p154: {
    name: 'F2',
    value: true,
    unit: 'l/min',
    visible: true,
    position: 0,
  },
  p154_0: true,
  p154_1: true,
  p154_2: true,
  p156: {
    name: 'E1',
    value: 100,
    unit: '%',
    visible: true,
    position: 0,
  },
  p170: {
    name: 'Schemat',
    value: 13,
  },
  p136: {
    name: 'T5',
    value: 34,
    unit: '°C',
    visible: true,
    position: 0, // 0 - woda użytkowa / 1 - inne zastosowanie(pod zegarem)  / 2 - inne
  },
  p138: {
    name: 'T6',
    value: 34,
    unit: '°C',
    visible: true,
    position: 0, // 0 - woda użytkowa / 1 - inne zastosowanie(pod zegarem)  / 2 - inne
  },
  p292: {
    name: 'F2',
    value: 14,
    unit: 'l/min',
    visible: true,
    position: 0,
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

run(config, '#root')
registerServiceWorker()

export const scheme = (config, selector) => {
  let handler = run(config, selector)

  return {
    updateConfig: config => {
      handler.props.store.dispatch(updateData(config))
    },
  }
}
