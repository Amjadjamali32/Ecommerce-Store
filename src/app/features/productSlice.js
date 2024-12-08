import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is an amazing product that does wonders for you.',
        price: 655,
        image: 'https://img.drz.lazcdn.com/static/pk/p/01fbb0806fd32488e9a2c3144d96c7cc.jpg_400x400q80.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This product will change the way you see the world!',
        price: 1728,
        image: 'https://img.drz.lazcdn.com/static/pk/p/d08aea77ac60661fc59a5030da74c4e0.jpg_400x400q80.jpg',
    },
    {
        id: 3,
        name: 'Product 3',
        description: 'A must-have for anyone looking to improve their life.',
        price: 805,
        image: 'https://img.drz.lazcdn.com/static/pk/p/7e9f78523b90ed347638fbcf07266fcf.png_400x400q80.png_.webp',
    },
    {
        id: 4,
        name: 'Product 4',
        description: 'The best product in its category. Don’t miss out!',
        price: 999,
        image: 'https://img.drz.lazcdn.com/static/pk/p/6c4a4b3c9348df88fa88f855d37f2989.jpg_400x400q80.jpg_.webp',
    },
    {
        id: 5,
        name: 'Product 5',
        description: 'The best product in its category. Don’t miss out!',
        price: 795,
        image: 'https://img.drz.lazcdn.com/static/pk/p/4491f6e1c9cb46d7daaf50b69617f172.jpg_400x400q80.jpg_.webp',
    },
    {
        id: 6,
        name: 'Product 6',
        description: 'The best product in its category. Don’t miss out!',
        price: 999,
        image: 'https://img.drz.lazcdn.com/static/pk/p/8dfe7c4c3ca9c9c13cb32e18be75fe1a.jpg_400x400q80.jpg_.webp',
    },
    {
        id: 7,
        name: 'Product 7',
        description: 'The best product in its category. Don’t miss out!',
        price: 1550,
        image: 'https://img.drz.lazcdn.com/static/pk/p/828d6a1784ed08cd07fadc4509b7d610.jpg_400x400q80.jpg_.webp',
    },
    {
        id: 8,
        name: 'Product 8',
        description: 'The best product in its category. Don’t miss out!',
        price: 910,
        image: 'https://img.drz.lazcdn.com/static/pk/p/365d1e83e84d30d0b869ce4da4fcc9d0.jpg_400x400q80.jpg_.webp',
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
