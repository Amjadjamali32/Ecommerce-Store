import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../app/features/cartSlice.js';
import logo from "../assets/cart.jpg";

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
        <div className='pt-20 mx-4'>
            <img src={logo} alt='cart' className='mx-auto lg:w-2/6 my-2'/>
            {cartItems.length === 0 ? (
                <p className='font-bold text-center text-4xl text-red-500'>Your cart is empty!</p>
            ) : (
                <div className='mx-4'>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                borderBottom: '1px solid #ccc',
                                padding: '10px 0',
                                gap: '10px',
                            }}
                            className='my-2 shadow-lg bg-gray-300 rounded-sm p-3' 
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
                                className='ms-4'
                            />
                            <div style={{ flex: 1 }}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>
                                    <strong>Price: </strong>${item.price}
                                </p>
                                <p>
                                    <strong>Quantity: </strong>{item.quantity}
                                </p>
                            </div>
                            <button
                                onClick={() => handleRemove(item.id)}
                                style={{
                                    padding: '8px 12px',
                                    backgroundColor: '#dc3545',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                                className=' me-4'
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={handleClearCart}
                        style={{
                            marginTop: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#ffc107',
                            color: '#000',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                        className='my-3'
                    >
                        Clear Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
