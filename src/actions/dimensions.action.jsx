import { dimensionsTypes } from "../types";

export const updateDimensions = (dimensions) => ({
    type: dimensionsTypes.UPDATE,
    payload: dimensions
});