import { dataTypes } from '../types';

const initialState = {
  type: '',
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

  p128: {},
  p130: {},
  p132: {},
  p134: {},
  p136: {},
  p138: {},
  p140: {},
  p144: {},
  p148: {},
  p152: {},
  p154: {},
  p156: {},
  p160: {},
  p168: {},
  p170: {
    value: 1
  },
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
  p292: {},
}; /*  */

export const data = (state = initialState, action) => {
  switch (action.type) {
    case dataTypes.UPDATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
