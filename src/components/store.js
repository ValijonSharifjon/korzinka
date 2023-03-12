import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./ShopSlice";

export const store=configureStore({
    reducer:{
        shopSlice,
    },
})