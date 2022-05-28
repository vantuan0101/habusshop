import { configureStore } from "@reduxjs/toolkit";
import apiProductReducer from "../redux/apiProductSlice";
import apiCategoryReducer from "./apiCategorySlice";
import cartReducer from './cartsSlice'
const store = configureStore({
    reducer : {
        apiProduct : apiProductReducer,
        apiCategory : apiCategoryReducer,
        carts : cartReducer
    }
})
export default store;