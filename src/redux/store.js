import { configureStore } from "@reduxjs/toolkit";
import productPreviewReducer from "features/pages/Home/ProductPreview/productPreviewSlice";
import categoryMenProductReducer from "features/pages/products/MenProduct/categoryMenProductSlice";
import apiProductReducer from "../redux/apiProductSlice"
import apiCategoryReducer from "./apiCategorySlice";

const store = configureStore({
    reducer : {
        apiProduct : apiProductReducer,
        apiCategory : apiCategoryReducer,
        apiMenProduct : categoryMenProductReducer,
        apiProductPreview : productPreviewReducer
    }
})
export default store;