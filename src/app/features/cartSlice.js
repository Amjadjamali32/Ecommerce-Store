import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.items.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1; // Increase quantity if the product is already in the cart
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Add new product with a quantity of 1
            }
        },
        removeFromCart: (state, action) => {
            const productIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (productIndex !== -1) {
                state.items.splice(productIndex, 1); // Remove the product from the cart
            }
        },
        clearCart: (state) => {
            state.items = []; // Clear all items from the cart
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
