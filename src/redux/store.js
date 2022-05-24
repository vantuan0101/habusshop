import { configureStore } from "@reduxjs/toolkit";
import apiProductReducer from "../redux/apiProductSlice";
import apiCategoryReducer from "./apiCategorySlice";

const store = configureStore({
    reducer : {
        apiProduct : apiProductReducer,
        apiCategory : apiCategoryReducer,
    }
})
export default store;