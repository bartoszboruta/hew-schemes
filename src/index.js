import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { App } from './App'
import { updateData } from './actions'
import registerServiceWorker from './registerServiceWorker'

// const config = {
//   type: 'split',
//   date: {
//     fill: '#00b100',
//     value: '15-12-2017 14:01:50',
//   },
//   CWU: {
//     value: true, // 3 pierwsze bity z 208 + p208_4 === 1
//     visible: false, //z konfiguracji
//     type: {
//       name: 'condenser', //condenser / coil
//       value: true, //z konfiguracji
//     },
//     additionalHeater: {
//       name: 'automatic_boiler', //heater /automatic_boiler
//       unit: '',
//       value: false, //p208_11
//     },
//     circulation: {
//       value: true, //p208_4 > 0 to true
//       visible: true,
//     },
//   },
//   CO: {
//     value: true, // 3 pierwsze bity z 208 + p208_4 === 0
//     visible: false, //z konfiguracji
//     type: {
//       name: 'boiler', //noBoiler / boiler
//       value: false, //z konfiguracji
//     },
//     additionalHeater: {
//       name: 'automatic_boiler', //heater /automatic_boiler
//       unit: '',
//       value: true, //p208_12
//     },
//   },
//   p128: {
//     name: 'T1',
//     value: 123,
//     unit: '°C',
//   },
//   p132: {
//     name: 'T2',
//     value: 33,
//     unit: '°C',
//   },
//   p134: {
//     name: 'T3',
//     value: 33,
//     unit: '°C',
//   },
//   p140: {
//     name: 'T6',
//     value: 33,
//     unit: '°C',
//   },
//   p146: {
//     name: 'T9',
//     value: 33,
//     unit: '°C',
//   },
//   p150: {
//     name: 'T11',
//     value: 15,
//     unit: '°C',
//   },
//   p152: {
//     // temperatureSensor - z konfiguracji
//     name: 'T12', // temperatureSensor === "digital" ? "" : "T12"
//     value: 15, // temperatureSensor === "digital" ? (value > 0 ? "ON" : "OFF") : value
//     unit: '°C', // temperatureSensor === "digital" ? "" : "°C"
//   },
//   p154: {
//     // temperatureSensor === "digital" - z konfiguracji
//     name: 'T13', // temperatureSensor === "digital" ? "" : "T13"
//     value: 15, // temperatureSensor === "digital" ? (value > 0 ? "ON" : "OFF") : value
//     unit: '°C', // temperatureSensor === "digital" ? "" : "°C"
//   },
//   p156: {
//     name: 'T14',
//     value: 15,
//     unit: '°C',
//   },
//   Output: {
//     circuit1: {
//       value: true, //p208_5 > 0
//       visible: true, //z konfiguracji
//     },
//     circuit2: {
//       value: true, //p208_8 > 0
//       visible: true, //z konfiguracji
//     },
//     circuit3: {
//       value: true, //p208_10 > 0
//       visible: true, //z konfiguracji
//     },
//     temperatureSensor: {
//       name: 'digital', //digital lub analog
//     },
//     value: true, //p208_5 > 0 || /p208_8 > 0 || /p208_10 > 0,
//   },
//   PC1: {
//     //p322
//     value: 1,
//   },
//   PC2: {
//     //p372
//     value: 0,
//   },
// }

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
    value: 1,
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
