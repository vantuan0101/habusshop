const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: productApi } = require("api/productsApi");

export const fetchProductPreview = createAsyncThunk(
    'productPreview/fetchProductPreview',
    async (number) => {
        const data = await productApi.getLimit(number)
        return data
    }
)

const productPreviewSlice = createSlice({
    name : 'productPreview',
    initialState  :{
        dataProduct :[],
    },
    extraReducers :{
        [fetchProductPreview.pending] : (state, action) => {},
        [fetchProductPreview.fulfilled] : (state, action) => {
            state.dataProduct = action.payload;
        }
    }
})

const {reducer : productPreviewReducer } = productPreviewSlice;
export default productPreviewReducer;