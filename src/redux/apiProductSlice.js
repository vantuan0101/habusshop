const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const { default: productApi } = require('api/productsApi');

//  Create async thunk  
export const fetchApiDataProduct = createAsyncThunk(
    'DataProduct/getDataProduct',
     async () => {
        const data = await productApi.getAll()
        return data
    
});

const initialState = {
    dataProduct: [],
    loading: false,
};
const apiProductSlice = createSlice({
    name: 'DataProduct',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchApiDataProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchApiDataProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.dataProduct = action.payload;
        },
        [fetchApiDataProduct.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

const {reducer : apiProductReducer} = apiProductSlice
export default apiProductReducer;
