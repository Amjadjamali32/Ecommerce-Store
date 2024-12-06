import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/productSlice.js';
import cartReducer from './features/cartSlice.js';

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
});
