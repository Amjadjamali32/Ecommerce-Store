import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../app/features/cartSlice.js';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = useSelector((state) => state.products); // Access products from Redux store
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Add product to cart
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-sm text-gray-600 mb-2">
                            {product.description.length > 50
                                ? `${product.description.slice(0, 50)}...`
                                : product.description}
                        </p>
                        <p className="font-bold text-blue-600">${product.price}</p>
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                            >
                                Add to Cart
                            </button>
                            <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline text-sm">
                                See More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
