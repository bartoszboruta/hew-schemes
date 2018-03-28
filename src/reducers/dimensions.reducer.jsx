import { dimensionsTypes } from '../types';

const initialState = {
    height: 0,
    width: 0
};

export const  dimensions = (state = initialState, action) => {
    switch (action.type) {
        case dimensionsTypes.UPDATE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};