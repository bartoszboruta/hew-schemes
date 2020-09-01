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
//     value: false, // 3 pierwsze bity z 208 + p208_4 === 1
//     visible: true, //z konfiguracji
//     type: {
//       name: 'condenser', //condenser / coil
//       value: true, //z konfiguracji
//     },
//     additionalHeater: {
//       name: 'heater', //grzałka i dodać dodatkowy kocioł(DOROBIĆ)
//       unit: '',
//       value: true, //p208_11
//     },
//     circulation: {
//       value: true, //p208_4 > 0 to true
//       visible: true,
//     },
//   },
//   CO: {
//     value: true, // 3 pierwsze bity z 208 + p208_4 === 0
//     visible: true, //z konfiguracji
//     type: {
//       name: 'boiler', //noBoiler / boiler
//       value: false, //z konfiguracji
//     },
//     additionalHeater: {
//       name: 'heater', //heater /automatic_boiler
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
//     name: 'T12',
//     value: 15,
//     unit: '°C',
//   },
//   p154: {
//     name: 'T13',
//     value: 15,
//     unit: '°C',
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


const config = {
  type: 'split',
  date: {
    fill: '#00b100',
    value: '15-12-2017 14:01:50',
  },
  CWU: {
    value: false, // 3 pierwsze bity z 208 + p208_4 === 1
    visible: true, //z konfiguracji
    type: {
      name: 'condenser', //condenser / coil
      value: true, //z konfiguracji
    },
    additionalHeater: {
      name: 'heater', //grzałka i dodać dodatkowy kocioł(DOROBIĆ)
      unit: '',
      value: true, //p208_11
    },
    circulation: {
      value: true, //p208_4 > 0 to true
      visible: true,
    },
  },
  CO: {
    value: true, // 3 pierwsze bity z 208 + p208_4 === 0
    visible: true, //z konfiguracji
    type: {
      name: 'boiler', //noBoiler / boiler
      value: false, //z konfiguracji
    },
    additionalHeater: {
      name: 'heater', //heater /automatic_boiler
      unit: '',
      value: true, //p208_12
    },
  },
  p100: {
    name: 'ID sterownika',
    value: 45570,//P02 - 36903 , P03 - 45570
  },
  p130: {
    name: 'T1',
    value: 123,
    unit: '°C',
  },
  p132: {
    name: 'T2',
    value: 33,
    unit: '°C',
  },
  p134: {
    name: 'T3',
    value: 33,
    unit: '°C',
  },
  p140: {
    name: 'T6',
    value: 33,
    unit: '°C',
  },
  p146: {
    name: 'T9',
    value: 33,
    unit: '°C',
  },
  p150: {
    name: 'T11',
    value: 15,
    unit: '°C',
  },
  p152: {
    name: 'T12',
    value: 15,
    unit: '°C',
  },
  p154: {
    name: 'T13',
    value: 15,
    unit: '°C',
  },
  p156: {
    name: 'T14',
    value: 15,
    unit: '°C',
  },
  Output: {
    circuit1: {
      value: true, //p208_5 > 0
      visible: true, //z konfiguracji
    },
    circuit2: {
      value: true, //p208_8 > 0
      visible: true, //z konfiguracji
    },
    circuit3: {
      value: true, //p208_10 > 0
      visible: true, //z konfiguracji
    },
    temperatureSensor: {
      name: 'digital', //digital lub analog
    },
    value: true, //p208_5 > 0 || /p208_8 > 0 || /p208_10 > 0,
  },
  PC1: {
    //p322
    value: 1,
  },
  PC2: {
    //p372
    value: 0,
  },
}

// const config = {
//   type: 'solar',
//   date: {
//     fill: '#00b100',
//     value: '15-12-2017 14:01:50',
//   },
//   p100: {
//     value: 49201,
//   },
//   p128: {
//     //visible, position
//     name: 'T1',
//     value: 123,
//     unit: '°C',
//     visible: true,
//     position: 'default',
//   },
//   p130: {
//     name: 'T2',
//     value: 11,
//     unit: '°C',
//     visible: true,
//     position: 'default',
//   },
//   p132: {
//     name: 'T3',
//     value: 33,
//     unit: '°C',
//     visible: true,
//     position: 'default',
//   },
//   p134: {
//     name: 'T4',
//     value: 34,
//     unit: '°C',
//     visible: true,
//     position: 'default',
//   },
//   p136: {
//     name: 'T5',
//     value: 34,
//     unit: '°C',
//     visible: true,
//     position: 'default',
//   },
//   p138: {
//     name: 'T6',
//     value: 34,
//     unit: '°C',
//     visible: true,
//     position: 'default',
//   },
//   p152: {
//     name: 'F1',
//     value: 33,
//     unit: 'l/min',
//     visible: true,
//     position: 'default',
//   },
//   p170: {
//     name: 'Schemat',
//     value: 13,
//   },
//   p154: {
//     name: 'F2',
//     value: 7,
//     unit: 'l/min',
//     visible: true,
//     position: 'default',
//   },
//   p292: {
//     name: 'F2',
//     value: 12,
//     unit: 'l/min',
//     visible: true,
//     position: 'default',
//   },
//   p156: {
//     name: 'E1',
//     value: 100,
//     unit: '%',
//     visible: true,
//     position: 'default',
//   },

//   p154_0: 0,
//   p154_1: 0,
//   p154_2: 1,
// }

// const config = {
//   type: 'pv',
//   p128: {
//     value: 15,
//     unit: 'W',
//   },
//   p132: {
//     value: -262,
//     unit: 'W',
//   },
//   p136: {
//     value: -120,
//     unit: 'W',
//   },
//   p140: {
//     value: 0,
//     unit: 'W',
//   },
//   p144: {
//     value: -384,
//     unit: 'W',
//   },
//   p268: {
//     value: 0,
//     unit: 'W',
//   },
//   p282: {
//     value: '51.8',
//     unit: '°C',
//   },
//   p288: 1,
//   p1140: 1,
//   p1202: 0,
//   powerHomeInstallation: {
//     value: 399,
//     unit: 'W',
//   },
//   powerPanel1: {
//     visible: false,
//   },
//   powerPanel2: {
//     visible: false,
//   },
//   date: {
//     fill: '#00b100',
//     value: '2018-11-24 13:52:49',
//   },
//   optiPv: {
//     count: 4,
//     manualRegistry: 'reg_2107',
//     manualRegistryValue: 'p290',
//     manualRegistries: ['reg_2332', 'reg_2333', 'reg_2334', 'reg_2335'],
//     relays: [
//       {
//         manual: 0,
//         name: 'lampa kuch.',
//         value: 0,
//       },
//       {
//         manual: 0,
//         name: 'lampa biurko',
//         value: 0,
//       },
//       {
//         manual: 0,
//         name: 'lampy ogród',
//         value: 0,
//       },
//       {
//         manual: 0,
//         name: 'lampa tele',
//         value: 0,
//       },
//     ],
//   },
//   optiTemp: {
//     count: 2,
//     manualRegistry: 'reg_2124',
//     manualRegistryValue: 'p1700',
//     manualRegistries: ['reg_2336', 'reg_2337'],
//     relays: [
//       {
//         manual: 0,
//         name: 'PCWU',
//         value: 0,
//       },
//       {
//         manual: 0,
//         name: 'obwód 2T',
//         value: 0,
//       },
//     ],
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
//   callbacks: {},
// }

// POSITION: 0 - woda użytkowa // 1 - inne zastosowanie // 2, 3 - niestandardowe np sch3 na kotle
/*const config = {
  type: 'cop',
  date: {
    fill: '#00b100',
    value: '15-12-2017 14:01:50',
  },
  p128: {
    name: 'Moc',
    value: 1,
    unit: 'W',
    visible: true,
    position: 'default',
  },
  p132: {
    name: 'Moc',
    value: 11,
    unit: 'W',
    visible: true,
    position: 'default',
  },
  p140: {
    name: 'Napięcie',
    value: 1,
    unit: 'V',
    visible: true,
    position: 'default',
  },
  p144: {
    name: 'Napięcie',
    value: 1,
    unit: 'V',
    visible: true,
    position: 'default',
  },
  p148: {
    name: 'Natężenie',
    value: 1,
    unit: 'A',
    visible: true,
    position: 'default',
  },
  p152: {
    name: 'Natężenie',
    value: 1,
    unit: 'A',
    visible: true,
    position: 'default',
  },
  p160: {
    name: 'Ogrzewanie 1',
    value: 1,
    unit: 'kWh',
    visible: true,
    position: 'default',
  },
  p168: {
    name: 'Ogrzewanie 2',
    value: 122,
    unit: 'kWh',
    visible: true,
    position: 'default',
  },
  p184: {
    name: 'Temperatura T1',
    value: 122,
    unit: '°C',
    visible: true,
    position: 'default',
  },
  p186: {
    name: 'Temperatura T2',
    value: 122,
    unit: '°C',
    visible: true,
    position: 'default',
  },
  p186_p184: {
    name: 'Różnica T1 - T2',
    value: 122,
    unit: '°C',
    visible: true,
    position: 'default',
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
    position: 'default',
  },
  p200: {
    name: 'Ciepło',
    value: 122,
    unit: 'kWh',
    visible: true,
    position: 'default',
  },
  p208: {
    name: 'Wodomierz',
    value: 122,
    unit: 'l',
    visible: true,
    position: 'default',
  },
  p230: {
    name: 'Chłód',
    value: 11,
    unit: 'kWh',
    visible: true,
    position: 'default',
  },
  p232: {
    name: 'Rozmrażanie',
    value: 11,
    unit: 'kWh',
    visible: true,
    position: 'default',
  },
  p238: {
    name: 'Chłodzenie',
    value: 12,
    unit: 'kWh',
    visible: true,
    position: 'default',
  }
}*/

const run = (config, selector) => {
  const target = document.querySelector(selector)
  if (!target) {
    return
  }

  const handler = render(
    <Provider store={store}>
      <App parent={target} />
    </Provider>,
    target
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
    }
  }
}
