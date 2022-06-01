import { configureStore } from "@reduxjs/toolkit";
import apiCategoryReducer from "./apiCategorySlice";
import cartReducer from './cartsSlice'
import dataFormReducer from "./dataFormSlice";
import productAllReducer from "./productAllSlice";
const store = configureStore({
    reducer : {
        productAll : productAllReducer,
        apiCategory : apiCategoryReducer,
        carts : cartReducer,
        dataForm : dataFormReducer,
    }
})
export default store;