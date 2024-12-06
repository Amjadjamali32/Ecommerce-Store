import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is an amazing product that does wonders for you.',
        price: 100,
        image: 'https://via.placeholder.com/250x150',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This product will change the way you see the world!',
        price: 150,
        image: 'https://via.placeholder.com/250x150',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'A must-have for anyone looking to improve their life.',
        price: 200,
        image: 'https://via.placeholder.com/250x150',
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'The best product in its category. Don’t miss out!',
        price: 250,
        image: 'https://via.placeholder.com/250x150',
    },
];

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        updateProduct: (state, action) => {
            const { id, name, description, price, image } = action.payload;
            const existingProduct = state.find((product) => product.id === id);
            if (existingProduct) {
                existingProduct.name = name;
                existingProduct.description = description;
                existingProduct.price = price;
                existingProduct.image = image;
            }
        },
        deleteProduct: (state, action) => {
            const index = state.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
