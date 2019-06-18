Author: [Bartosz Boruta](https://github.com/bartoszboruta)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Developers usage
    yarn start - runs app for developer
    yarn build - creates static files for app in ./build directory

#### Needed params

###### Solar
```js
params = {
    p128: {},
    p130: {},
    p132: {},
    p134: {},
    p136: {},
    p138: {},
    p152: {},
    p154: {},
    p156: {},
    p170: {
    value: 1
    },
    p292: {}
}

```
###### Split
```js
params = {
  CO: {
    type: {},
    additionalHeater: {}
  },
  CWU: {
    type: {},
    additionalHeater: {},
    circulation: {}
  },
  date: {},
  PC1: {},
  PC2: {},
  Output: {
    circuit1: {},
    circuit2: {},
    circuit3: {},
    temperatureSensor: {}
  },
}
```

###### COP
```js
params = {
    p128: {},
    p132: {},
    p140: {},
    p144: {},
    p148: {},
    p160: {},
    p168: {},
    p184: {},
    p186: {},
    p186_p184: {},
    p190: {},
    p192: {},
    p200: {},
    p208: {},
    p230: {},
    p232: {},
    p238: {},
}

```

### Ekontrol usage example
```js

let config = {
      type: 'split',
      date: {
          fill: '#00b100',
          value: '15-12-2017 14:01:50'
      },
      CWU: {
          value: true,
          visible: true,
          type: {
              name: 'coil', //condenser / coil
              value: true
          },
          additionalHeater: {
              name: 'heater',
              unit: '',
              value: true,
          },
          circulation: {
              value: true,
              visible: true,
          },
      },
      CO: {
          visible: true,
          value: false,
          type: {
              name: 'boiler', //noBoiler / boiler
              value: true
          },
          additionalHeater: {
              name: 'heater', //heater /automatic_boiler
              unit: '',
              value: true,
          }
      },
      p128: {
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
              value: false,
              visible: true,
          },
          circuit2: {
              value: false,
              visible: true,
          },
          circuit3: {
              value: true,
              visible: false,
          },
          temperatureSensor: {
              name: 'analog' //digital
          },
          value: true,
      },
      PC1: {
          value: 10
      },
      PC2: {
          value: 0
      },
};

const scheme = EkontrolSchemes.scheme(config, '#container');

config = {
    type: 'solar',
    date: {
        fill: '#00b100',
        value: '15-12-2017 14:01:50'
    },
    p128: { //visible, position
        name: 'T1',
        value: 123,
        unit: '°C',
        visible: true,
        position: 'default'
    },
    p130: {
        name: 'T2',
        value: 11,
        unit: '°C',
        visible: true,
        position: 'default'
    },
    p132: {
        name: 'T3',
        value: 33,
        unit: '°C',
        visible: true,
        position: 'default'
    },
    p134: {
        name: 'T4',
        value: 34,
        unit: '°C',
        visible: true,
        position: 'default'
    },
    p136: {
        name: 'T5',
        value: 34,
        unit: '°C',
        visible: true,
        position: 'default'
    },
    p138: {
        name: 'T6',
        value: 34,
        unit: '°C',
        visible: true,
        position: 'default'
    },
    p152: {
        name: 'F1',
        value: 33,
        unit: 'l/min',
        visible: true,
        position: 'default'
    },
    p170: {
        name: 'Schemat',
        value: 3,
    },
    p292: {
        name: 'F2',
        value: 12,
        unit: 'l/min',
        visible: true,
        position: 'default'
    },
    p156: {
        name: 'E1',
        value: 100,
        unit: '%',
        visible: true,
        position: 'default'
    }
};

scheme.updateConfig(config);

config = {
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

```
Good luck!