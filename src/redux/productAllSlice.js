import productApi from 'api/productsApi';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

//  Create async thunk  
export const fetchApiProductAll = createAsyncThunk(
    'productAll/getDataProduct',
     async () => {
        const data = await productApi.getAll()

        return data
});

const initialState = {
    dataProduct: [],
    loading: false,
};

const productAllSlice = createSlice({
    name: 'productAll',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchApiProductAll.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchApiProductAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.dataProduct = action.payload;
        },
        [fetchApiProductAll.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

const {reducer :productAllReducer} = productAllSlice
export default productAllReducer;
