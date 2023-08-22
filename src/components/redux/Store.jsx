import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./slices/CartSlices";

export const Store = configureStore({
    reducer:{
        cart:CartSlices
    }
});