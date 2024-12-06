import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        alert('Message sent!');
    };

    return (
        <div className="pt-8">
            <div className="py-16 px-4">
                <div className='shadow-lg lg:w-3/6 mx-auto rounded-md bg-blue-400 p-6 text-white'>
                    <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-md font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border rounded-md mt-2 text-black"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
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
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-md font-medium">Message</label>
                            <textarea
                                id="message"
                                className="w-full px-4 py-2 border rounded-md mt-2 text-black"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mb-3 mt-2"
                        >
                            Send Message
                        </button> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
