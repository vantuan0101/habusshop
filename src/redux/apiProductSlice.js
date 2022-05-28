import categoryApi from 'api/categoryApi';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

//  Create async thunk  
export const fetchApiDataProduct = createAsyncThunk(
    'DataProduct/getDataProduct',
     async (params , {dispatch}) => {
        const data = await categoryApi.getSpecific(params)
    //    dispatch(fetchApiDataProduct('electronics'))

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
