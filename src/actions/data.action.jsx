import { dataTypes } from "../types";

export const updateData = (data) => ({
    type: dataTypes.UPDATE,
    payload: data
});