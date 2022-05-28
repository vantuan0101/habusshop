import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
};
export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCart: {
            reducer: (state, action) => {
                // const checkItem = state.carts.includes(action.payload)
                const checkItem = state.carts.findIndex((item ) => item.id === action.payload.id);
                // console.log(checkItem);
                if (checkItem !== -1) {
                    state.carts[checkItem].quantityCount =  state.carts[checkItem].quantityCount + 1
                } else {
                    state.carts.push(action.payload);
                }
                // console.log(state.carts);

            },
            prepare: (item, qty = 1) => {
                // const quantityCount = 1;
                return {
                    payload: {
                        id: item.id,
                        name: item.title,
                        price: item.price,
                        image: item.image,
                        quantityCount : qty,
                    },
                };
            },
        },
        removeCart: (state, action) => {
            state.carts.splice(action.payload, 1);
        },
        quantityDecrease :  (state, action)=>{
            const idx = action.payload
            state.carts[idx].quantityCount =  state.carts[idx].quantityCount - 1
        },
        quantityIncrease :  (state, action)=>{
            const idx = action.payload
            state.carts[idx].quantityCount =  state.carts[idx].quantityCount + 1
        },
    },
});

export const { addCart, removeCart, quantityDecrease, quantityIncrease } = cartsSlice.actions;
export default cartsSlice.reducer;
