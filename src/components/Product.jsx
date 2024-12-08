import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addToCart } from '../app/features/cartSlice';  // Import the addToCart action

const Product = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const dispatch = useDispatch(); // Use dispatch to send actions to the store
    
    // Find the product from the Redux store based on the ID
    const product = useSelector((state) =>
        state.products.find((p) => p.id === Number(id))
    );

    // If the product is not found, display a "Product not found" message
    if (!product) {
        return <h2 className="text-center text-2xl mt-10">Product not found!</h2>;
    }

    // Handle adding the product to the cart
    const handleAddToCart = () => {
        dispatch(addToCart(product)); // Dispatch the action to add the product to the cart
    };

    return (
        <div className="pt-20 mx-4">
            <Link
                to="/shop"
                className="text-blue-500 hover:underline text-lg my-4 inline-block"
            >
                ← Back to Shop
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover rounded-md shadow-md mx-4 my-4 lg:w-4/6"
                />
                <div className='mt-8 my-4'>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 text-lg mb-6">{product.description}</p>
                    <p className="text-2xl font-bold mb-4">Price: ${product.price}</p>
                    <button
                        onClick={handleAddToCart} // Call handleAddToCart on button click
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
