import categoryApi from 'api/categoryApi';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const fetchMenProductList = createAsyncThunk('category/menproduct', async () => {
    const dataMenProductList = await categoryApi.getSpecific("men's%20clothing");
    return dataMenProductList;
});

const categoryMenProductSlice = createSlice({
    name: 'category',
    initialState: {
        dataProduct: [],
        loading: false,
    },
    extraReducers: {
        [fetchMenProductList.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchMenProductList.fulfilled]: (state, action) => {
            state.dataProduct = action.payload;
            state.loading = false;
        },
    },
});

const {reducer : categoryMenProductReducer} =   categoryMenProductSlice
export default categoryMenProductReducer;
