import categoryApi from 'api/categoryApi';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export  const fetchApiCategoryList = createAsyncThunk(
    'category/fetchApiCategoryList',
    async () => {
        const categoryList = await categoryApi.getAll()
        return categoryList
    }
)

const initialState = {
    categoryList : [],
    loading :false
};
const apiCategorySlice = createSlice({
    name: 'category',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchApiCategoryList.pending] : (state, action)=>{
            state.loading = true
        },
        [fetchApiCategoryList.fulfilled] : (state,action)=>{
            state.categoryList = action.payload
            state.loading = false

        },
        [fetchApiCategoryList.rejected] : (state, action)=>{
            state.loading = false
        },
    },
});
const {reducer : apiCategoryReducer} = apiCategorySlice
export default apiCategoryReducer;
