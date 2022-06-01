import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataForm: [],
};
const dataFormSlice = createSlice({
    name: 'dataForm',
    initialState,
    reducers: {
        addDataFrom: (state, action) => {
            const checkItem = state.dataForm.findIndex(
                (item) =>
                    item.phone === action.payload.phone ||
                    item.shipMethod === action.payload.shipMethod ||
                    item.cardsName === action.payload.cardsName,
            );
            if (checkItem === -1) {
            }
            state.dataForm.push(action.payload);
            
        },
    },
});

export const { addDataFrom } = dataFormSlice.actions;
const { reducer: dataFormReducer } = dataFormSlice;
export default dataFormReducer;
