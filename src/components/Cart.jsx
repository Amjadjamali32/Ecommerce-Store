import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../app/features/cartSlice.js';
import logo from "../assets/cart.png";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items); // Access cart items from Redux store
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
        dispatch(removeFromCart({ id: productId })); // Dispatch removeFromCart action
    };

    const handleClearCart = () => {
        dispatch(clearCart()); // Dispatch clearCart action
    };

    return (
        <div className="pt-20 px-4">
            <div className="text-center">
                <img src={logo} alt="cart" className="w-4/6 lg:w-2/6 mx-auto my-2" />
            </div>
            {cartItems.length === 0 ? (
                <p className="font-bold text-center text-2xl lg:text-4xl text-red-500 mt-6">
                    Your cart is empty!
                </p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col lg:flex-row items-center bg-gray-200 shadow-lg rounded-md p-4 gap-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-md"
                            />
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-sm text-gray-700">{item.description}</p>
                                <p className="text-sm mt-2">
                                    <strong>Price: </strong>${item.price}
                                </p>
                                <p className="text-sm">
                                    <strong>Quantity: </strong>{item.quantity}
                                </p>
                            </div>
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="text-center">
                        <button
                            onClick={handleClearCart}
                            className="mt-4 py-2 px-6 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
