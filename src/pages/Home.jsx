import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Array of featured product data
    const featuredProducts = [
        {
            id: 1,
            name: 'Smart Watch',
            price:2690,
            image: 'https://img.drz.lazcdn.com/static/pk/p/64a14abfb3d1fe2a19fe3e0ef631cc8f.png_400x400q75.png_.webp', 
        },
        {
            id: 2,
            name: 'Wireless Headphones',
            price: 1299,
            image: 'https://img.drz.lazcdn.com/static/pk/p/034aa3c73c0ece59448b1c29a929e2d8.jpg_400x400q75.jpg_.webp',
        },
        {
            id: 3,
            name: 'Nokia 106',
            price: 2730,
            image: 'https://img.drz.lazcdn.com/g/kf/Sf8fc3d9f1e2f4af682ae234073f8d695w.jpg_400x400q75.jpg_.webp', 
        },
        {
            id: 4,
            name: 'Ergonomic dual Mode',
            price: 729,
            image: 'https://img.drz.lazcdn.com/static/pk/p/e744b0b9d43a04bac05b0a95667e3879.jpg_400x400q75.jpg_.webp', 
        },
    ];
    return (
        <div className='pt-16'>
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-10 px-4 md:py-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-bold md:text-5xl">
                        Welcome to AJStore
                    </h1>
                    <p className="mt-4 text-lg md:text-xl">
                        Your one-stop shop for the best products at unbeatable prices.
                    </p>
                    <button className="px-10 py-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition duration-200 ease-in-out mt-8">
                        <Link to="/shop">
                            Shop Now
                        </Link>
                    </button>

                </div>
            </div>

            {/* Featured Products Section */}
            <div className="max-w-7xl mx-auto py-10 px-4">
                <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition"
                        >
                            <img
                                src={product.image} // Use product image URL
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-gray-600 mt-2">${product.price}</p>
                                <Link
                                    to={`/product/${product.id}`} // Link to product details
                                    className="mt-4 inline-block bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <div className="bg-gray-100 py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Shop by Categories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {['Electronics', 'Fashion', 'Home', 'Sports'].map((category, index) => (
                            <Link
                                key={index}
                                to={`//${category.toLowerCase()}`}
                                className="block bg-white shadow rounded overflow-hidden text-center p-6 hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-semibold">{category}</h3>
                                <p className="text-gray-600 mt-2">Explore Now</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-10 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-400 shadow-lg rounded p-6 text-center hover:shadow-lg transition"
                            >
                                <p className="text-white">
                                    "Amazing store! I found everything I needed and the prices are fantastic."
                                </p>
                                <h4 className="mt-4 font-bold">Customer {index + 1}</h4>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">Join Our Community</h2>
                    <p className="mt-4 text-lg">
                        Sign up now and get exclusive offers and discounts.
                    </p>
                    <Link
                        to="/signup"
                        className="inline-block mt-6 bg-white text-green-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
                    >
                        Sign Up Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
