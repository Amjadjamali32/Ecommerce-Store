import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic
        alert('Logged in!');
    };

    return (
        <div className="pt-16">
            <div className='shadow-lg bg-blue-400 text-white rounded-sm lg:w-3/6 mx-auto max-w-sm mt-5'>
                <div className="py-6 px-4">
                    <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-md font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border rounded-md mt-2 text-black"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-md font-medium">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border rounded-md mt-2 text-black"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link to="/signup" className="text-white hover:underline text-sm">Don't have an account? Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
